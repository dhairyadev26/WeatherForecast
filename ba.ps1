param (
    [string]$message = "",
    [string]$datetime = ""
)

# List of short but realistic commit messages
$messages = @(
    "update--", "clen/", "refctr", "bugFix", "opt-code", "e++", 
    "quickfix", "adjust/", "final_pass", "tweak.", "cleanup", "Recheck",
    "refine-now", "upd", "hotfix", "retry", "review1", "layout++", 
    "patch-v1", "testthis", "fix-ui", "done", "stream/", "checkagain", 
    "logicdone", "fix-", "lastpass", "tryagain", "last-edits", 
    "pushit", "opt/", "resync", "finish", "validate", "patchup", "nodiff",
    "fileupdate", "checklist", "align-", "overhaul", "fixes/"
)


# Generate random date/time if not supplied
if (-not $datetime) {
    $startDate = Get-Date "2024-09-28T00:00:00"
    $now = Get-Date

    # Generate random number of days since April 17, 2025
    $days = Get-Random -Minimum 1 -Maximum ([int]($now - $startDate).TotalDays)
    
    # Generate random time between 10:00 AM and 9:30 PM IST (IST = UTC+5:30)
    $hour = Get-Random -Minimum 10 -Maximum 21
    $minute = Get-Random -Minimum 0 -Maximum 59
    $second = Get-Random -Minimum 0 -Maximum 59

    $generatedDate = $startDate.AddDays($days).AddHours($hour).AddMinutes($minute).AddSeconds($second)
    $datetime = $generatedDate.ToString("yyyy-MM-ddTHH:mm:ss")
}

# Pick a random message if none provided
if (-not $message) {
    $message = Get-Random -InputObject $messages
}

Write-Host "Committing with:"
Write-Host "Date: $datetime"
Write-Host "Message: $message"

# Stage all changes
git add .

# Set environment variables
$env:GIT_AUTHOR_DATE = $datetime
$env:GIT_COMMITTER_DATE = $datetime

# Commit
git commit -m "$message"

# Push
git push origin main

# Cleanup
Remove-Item Env:GIT_AUTHOR_DATE -ErrorAction SilentlyContinue
Remove-Item Env:GIT_COMMITTER_DATE -ErrorAction SilentlyContinue
