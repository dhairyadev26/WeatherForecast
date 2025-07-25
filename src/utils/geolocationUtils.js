/**
 * Geolocation utility functions for handling browser geolocation
 */

/**
 * Get the user's current geolocation
 * @returns {Promise} Promise that resolves with coordinates or rejects with error
 */
export const getCurrentPosition = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not supported by your browser"));
      return;
    }
    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      (error) => {
        let errorMessage = "Unable to retrieve your location";
        
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = "User denied the request for geolocation";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable";
            break;
          case error.TIMEOUT:
            errorMessage = "The request to get user location timed out";
            break;
          case error.UNKNOWN_ERROR:
            errorMessage = "An unknown error occurred";
            break;
        }
        
        reject(new Error(errorMessage));
      },
      {
        enableHighAccuracy: false, // Don't need high accuracy for weather
        timeout: 10000, // 10 seconds timeout
        maximumAge: 600000 // Cache for 10 minutes
      }
    );
  });
};

/**
 * Get location name from coordinates using reverse geocoding
 * @param {Object} coords - Coordinates object with latitude and longitude
 * @returns {Promise} Promise that resolves with location name or rejects with error
 */
export const getLocationNameFromCoords = async (coords) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.latitude}&lon=${coords.longitude}&zoom=10`
    );
    
    if (!response.ok) {
      throw new Error("Failed to get location name");
    }
    
    const data = await response.json();
    
    // Extract city or town name from address
    let locationName = "";
    
    if (data.address) {
      // Try to get city, town, or village name in order of preference
      locationName = data.address.city || 
                    data.address.town || 
                    data.address.village || 
                    data.address.county ||
                    data.address.state;
    }
    
    // If no specific location found, use display_name but truncate it
    if (!locationName && data.display_name) {
      // Just get the first part before the first comma
      locationName = data.display_name.split(',')[0];
    }
    
    return locationName || "Unknown location";
  } catch (error) {
    console.error("Reverse geocoding error:", error);
    throw new Error("Could not determine location name");
  }
};
