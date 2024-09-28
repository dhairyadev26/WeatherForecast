import React, { useEffect } from 'react';
import { createFramebuffer } from '../webglFrameBuffer'; // Adjust the path as necessary

const Home = () => {
    useEffect(() => {
        // Access the canvas after the component has mounted
        const canvas = document.getElementById('yourCanvasId');

        if (!canvas) {
            console.error('Canvas element not found');
            return;
        }

        // Create framebuffer
        const { framebuffer, texture } = createFramebuffer(canvas);

        console.log('Framebuffer created:', framebuffer);
        console.log('Texture created:', texture);
    }, []); 

    console.log('Home component rendered'); 
    return(
        <div>
  {/* Last Published: Tue Sep 10 2024 15:25:45 GMT+0000 (Coordinated Universal Time) */}
  <meta charSet="utf-8" />
  <title>inside360</title>
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://www.inside360.studio/"
  />
  <link rel="alternate" hrefLang="en" href="https://www.inside360.studio/" />
  <link rel="alternate" hrefLang="de" href="https://www.inside360.studio/de" />
  <meta content="width=device-width, initial-scale=1" name="viewport" />
  <link
    href="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/css/i360-relaunch.webflow.0b0233495.css"
    rel="stylesheet"
    type="text/css"
  />
  <link
    href="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/6658f1082029585e9b4d208c_14.png"
    rel="shortcut icon"
    type="image/x-icon"
  />
  <link
    href="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/6658f0bdbcb37f9fe1fa197e_12.png"
    rel="apple-touch-icon"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        body {\n            overflow-x: hidden !important;\n        }\n    "
    }}
  />
  <div
    data-w-id="9420588c-80cc-6024-3977-bf32aadf4bda"
    style={{ display: "flex" }}
    className="preloader"
  >
    <div
      data-w-id="78820cd6-b30b-bb11-175e-ee8c29fbe25c"
      style={{ opacity: 1 }}
      className="preloader-wrapper"
    >
      <div className="preloader-title-block">
        <div
          data-w-id="726351ca-d9e4-f3fa-3499-7c86ce5e2d12"
          style={{ opacity: 0 }}
          className="preloader-title"
        >
          Inside
        </div>
        <div
          data-w-id="6b068d8b-2515-c692-a4da-7605b2a66a95"
          style={{ opacity: 0 }}
          className="preloader-title"
        >
          360
        </div>
      </div>
      <div className="preloader-progress-bar">
        <div
          data-w-id="5c169959-e520-215a-64da-068aea10b15b"
          style={{ width: "0%" }}
          className="preloader-progress-track"
        />
      </div>
    </div>
  </div>
  <div className="custom-css">
    <div className="styles---glowing-button w-embed">
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n                * {\n                    -webkit-font-smoothing: antialiased;\n                    -moz-osx-font-smoothing: grayscale;\n                    font-smoothing: antialiased;\n                    text-rendering: optimizeLegibility;\n                }\n\n                html {\n                    font-size: calc(0.625rem + 0.41666666666666663vw);\n                }\n\n                @media screen and (max-width:1920px) {\n                    html {\n                        font-size: calc(0.625rem + 0.41666666666666674vw);\n                    }\n                }\n\n                @media screen and (max-width:1440px) {\n                    html {\n                        font-size: calc(0.8126951092611863rem + 0.20811654526534862vw);\n                    }\n                }\n\n                @media screen and (max-width:479px) {\n                    html {\n                        font-size: calc(0.7494769874476988rem + 0.8368200836820083vw);\n                    }\n                }\n\n                .glowing-wrapper-button:after {\n                    background: radial-gradient(85% 120% at 50% 120%, rgba(255, 255, 255, .24) 0%, rgba(255, 255, 255, 0) 100%);\n                    border-radius: 999px;\n                    content: \"\";\n                    height: calc(100% + 4px);\n                    left: -4px;\n                    opacity: 0;\n                    position: absolute;\n                    top: -4px;\n                    transition: 1s all;\n                    width: calc(100% + 4px)\n                }\n\n                .glowing-wrapper-button:hover:after {\n                    opacity: .7\n                }\n\n                .glowing-wrapper-active .glowing-wrapper-animations,\n                .glowing-wrapper-active .glowing-wrapper-borders-masker {\n                    opacity: 1\n                }\n\n                .glowing-wrapper-animations:before,\n                .glowing-wrapper-borders:before {\n                    content: \"\";\n                    float: left;\n                    padding-top: 100%\n                }\n\n                .glowing-wrapper-animations:after,\n                .glowing-wrapper-borders:after {\n                    clear: both;\n                    content: \"\";\n                    display: block\n                }\n\n                .glowing-wrapper-animations {\n                    pointer-events: none;\n                }\n\n                .glowing-wrapper-animations * {\n                    height: 100%;\n                    left: 0;\n                    position: absolute;\n                    top: 0;\n                    width: 100%\n                }\n\n                .glowing-wrapper-borders,\n                .glowing-wrapper-glow,\n                .glowing-wrapper-mask {\n                    animation: borderTurn 2.5s infinite linear;\n                    background-image: conic-gradient(from 0 at 50% 50%, rgba(255, 255, 255, .5) 0deg, rgba(255, 255, 255, 0) 60deg, rgba(255, 255, 255, 0) 310deg, rgba(255, 255, 255, .5) 360deg);\n                    background-position: center center;\n                    background-repeat: no-repeat;\n                    background-size: cover\n                }\n\n                .glowing-wrapper-mask-wrapper {\n                    -webkit-mask: url(\"data:image/svg+xml,url('data:image/svg+xml,%253Csvg width='28' height='24' viewBox='0 0 28 24' fill='none' xmlns='http://www.w3.org/2000/svg'%253E%253Crect width='28' height='24' fill='black'/%253E%253C/svg%253E%250A');\");\n                    mask: url(\"data:image/svg+xml,url('data:image/svg+xml,%253Csvg width='28' height='24' viewBox='0 0 28 24' fill='none' xmlns='http://www.w3.org/2000/svg'%253E%253Crect width='28' height='24' fill='black'/%253E%253C/svg%253E%250A');\");\n                    mask-repeat: repeat;\n                    -webkit-mask-size: auto;\n                    mask-size: auto\n                }\n\n                .glowing-wrapper-borders {\n                    animation-name: borderTurnWithTranslate\n                }\n\n                .glowing-wrapper-borders-masker {\n                    content: \"\";\n                    inset: 0;\n                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n                    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n                    mask-composite: xor;\n                    -webkit-mask-composite: xor;\n                    mask-composite: exclude;\n                    pointer-events: none;\n                }\n\n                @keyframes borderTurn {\n                    0% {\n                        transform: rotate(0)\n                    }\n                    to {\n                        transform: rotate(360deg)\n                    }\n                }\n\n                @keyframes borderTurnWithTranslate {\n                    0% {\n                        transform: translate(-50%, -50%) rotate(0)\n                    }\n                    to {\n                        transform: translate(-50%, -50%) rotate(360deg)\n                    }\n                }\n            "
        }}
      />
    </div>
  </div>
  <div
    data-animation="default"
    data-collapse="small"
    data-duration={400}
    data-easing="ease"
    data-easing2="ease"
    role="banner"
    className="top-nav w-nav"
  >
    <div className="top-nav_wrapper">
      <a
        href="/"
        aria-current="page"
        className="top-nav_brand w-nav-brand w--current"
      >
        <div className="top-nav_brand--left">
          <div
            data-poster-url="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/66046af529cf6024543b583f_i360_logo-poster-00001.jpg"
            data-video-urls="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/66046af529cf6024543b583f_i360_logo-transcode.mp4,https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/66046af529cf6024543b583f_i360_logo-transcode.webm"
            data-autoplay="true"
            data-loop="true"
            data-wf-ignore="true"
            className="live-logo w-background-video w-background-video-atom"
          >
            <video
              id="29e7b3d1-eb7d-297e-4e69-a3ef41e86f7e-video"
              autoPlay=""
              loop=""
              style={{
                backgroundImage:
                  'url("https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/66046af529cf6024543b583f_i360_logo-poster-00001.jpg")'
              }}
              muted=""
              playsInline=""
              data-wf-ignore="true"
              data-object-fit="cover"
            >
              <source
                src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/66046af529cf6024543b583f_i360_logo-transcode.mp4"
                data-wf-ignore="true"
              />
              <source
                src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/66046af529cf6024543b583f_i360_logo-transcode.webm"
                data-wf-ignore="true"
              />
            </video>
          </div>
        </div>
        <img
          src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/66c44968cb48e16138a8128a_63f38e63e65caf2dad5fafca_inside360-logo-negativ.svg"
          loading="lazy"
          alt=""
          className="logo"
        />
      </a>
      <div className="menu">
        <div className="locales-wrapper w-locales-list">
          <div role="list" className="locales-list w-locales-items">
            <div role="listitem" className="w-locales-item">
              <a
                hrefLang="en"
                href="/"
                aria-current="page"
                className="loc-link top-nav_lang w--current"
              >
                en
              </a>
            </div>
            <div role="listitem" className="w-locales-item">
              <a hrefLang="de" href="/de" className="loc-link top-nav_lang">
                de
              </a>
            </div>
          </div>
        </div>
        <nav role="navigation" className="top-nav_menu w-nav-menu">
          <div className="glowing-wrapper glowing-wrapper-active">
            <div className="glowing-wrapper-animations">
              <div className="glowing-wrapper-glow" />
              <div className="glowing-wrapper-mask-wrapper">
                <div className="glowing-wrapper-mask" />
              </div>
            </div>
            <div className="glowing-wrapper-borders-masker">
              <div className="glowing-wrapper-borders" />
            </div>
            <a
              href="/contact"
              className="glowing-wrapper-button w-inline-block"
            >
              <div className="button-text">Contact us</div>
            </a>
          </div>
        </nav>
        <div className="menu-button w-nav-button">
          <img
            loading="lazy"
            src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/66572aa70bea3800ded99b7f_menu.svg"
            alt=""
            className="image-2"
          />
        </div>
      </div>
    </div>
  </div>
  <section className="section home-header">
    <div className="container">
      <div className="title-wrapper">
        <h1
          data-w-id="18a62882-6ce5-8e52-1b62-0384c510ace2"
          style={{ opacity: 0 }}
          className="heading-1 heading-1-centered hero-hl"
        >
          THE Immersive
          <br />
          AI CompanY
        </h1>
        <div className="title-mask-wrapper" />
        <div
          data-poster-url="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/657074e31099d1b431e04767_bgv2_i360_720p-poster-00001.jpg"
          data-video-urls="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/657074e31099d1b431e04767_bgv2_i360_720p-transcode.mp4,https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/657074e31099d1b431e04767_bgv2_i360_720p-transcode.webm"
          data-autoplay="true"
          data-loop="true"
          data-wf-ignore="true"
          className="title-bg-video w-background-video w-background-video-atom"
        >
          <video
            id="ac0c80b9-a213-81db-75b8-5a0fd236e957-video"
            autoPlay=""
            loop=""
            style={{
              backgroundImage:
                'url("https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/657074e31099d1b431e04767_bgv2_i360_720p-poster-00001.jpg")'
            }}
            muted=""
            playsInline=""
            data-wf-ignore="true"
            data-object-fit="cover"
          >
            <source
              src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/657074e31099d1b431e04767_bgv2_i360_720p-transcode.mp4"
              data-wf-ignore="true"
            />
            <source
              src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/657074e31099d1b431e04767_bgv2_i360_720p-transcode.webm"
              data-wf-ignore="true"
            />
          </video>
        </div>
        <div className="title-wrapper_overlay" />
      </div>
      <div className="carousel-wrapper">
        <div
          data-w-id="b8db07d4-94f7-3c91-837d-8e176724e689"
          className="trusted-title"
        >
          +350 Projects for companies like
        </div>
        <div className="trusted-carousel">
          <div className="trusted-carousel_inner">
            <div className="tc-slide">
              <img
                src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/6590263e3fcec21648c4de1e_logos-slide_01.svg"
                loading="lazy"
                alt=""
                className="tc-slide-image"
              />
            </div>
            <div className="tc-slide">
              <img
                src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/6590263e3fcec21648c4de1e_logos-slide_01.svg"
                loading="lazy"
                alt=""
                className="tc-slide-image"
              />
            </div>
          </div>
          <div className="trusted-carousel_inner-rev">
            <div className="tc-slide-rev">
              <img
                src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/65902640ba48a05dfdb45950_logos-slide_02.svg"
                loading="lazy"
                alt=""
                className="tc-slide-image"
              />
            </div>
            <div className="tc-slide-rev">
              <img
                src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/65902640ba48a05dfdb45950_logos-slide_02.svg"
                loading="lazy"
                alt=""
                className="tc-slide-image"
              />
            </div>
          </div>
          <div className="tc-left" />
          <div className="tc-right" />
        </div>
      </div>
    </div>
  </section>
  <section
    data-w-id="b22548b0-075e-7cb5-8216-1ca4a9c22905"
    className="section vr-section-big"
  >
    <div className="vr-glasses_wrapper-big">
      <div
        className="spline-01"
        data-w-id="9c98f092-c8c8-8aad-0319-1426fb02d9ab"
        data-animation-type="spline"
        data-spline-url="https://prod.spline.design/tAjk1txBV3g1z1E6/scene.splinecode"
      >
        <canvas />
      </div>
    </div>
  </section>
  <div className="section-text-gradient-effect">
    <div
      data-w-id="3e0e27c9-ad4f-2dfc-5f7d-3a5723caa2db"
      className="text-effect-wrapper"
    >
      <div className="text-effect-sticky-element">
        <div className="container-w3 gutter-outside">
          <div className="text-effect-overflow-hidden">
            <div className="text-effect-inner">
              <div className="text-effect-gradient">
                <div className="text-overlap-end" />
              </div>
              <p className="text-effect-text">
                Inside360 is a fast-growing Immersive AI company merging the
                powers of two of the most powerful technologies in our century.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section
    data-w-id="1e44d0f9-78f8-c953-fb51-245d92cf58d6"
    className="section immersive-sphere-section"
  >
    <div className="spline-sphere_wrapper">
      <div className="sphere-video-wrapper_01">
        <div
          data-poster-url="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e%2F6656cacd36520de6474029a1_SP_LOOP_1-poster-00001.jpg"
          data-video-urls="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e%2F6656cacd36520de6474029a1_SP_LOOP_1-transcode.mp4,https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e%2F6656cacd36520de6474029a1_SP_LOOP_1-transcode.webm"
          data-autoplay="true"
          data-loop="true"
          data-wf-ignore="true"
          className="sphere-video-01 w-background-video w-background-video-atom"
        >
          <video
            id="c131b542-f266-e705-91a6-a525a18edc8c-video"
            autoPlay=""
            loop=""
            style={{
              backgroundImage:
                'url("https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e%2F6656cacd36520de6474029a1_SP_LOOP_1-poster-00001.jpg")'
            }}
            muted=""
            playsInline=""
            data-wf-ignore="true"
            data-object-fit="cover"
          >
            <source
              src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e%2F6656cacd36520de6474029a1_SP_LOOP_1-transcode.mp4"
              data-wf-ignore="true"
            />
            <source
              src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e%2F6656cacd36520de6474029a1_SP_LOOP_1-transcode.webm"
              data-wf-ignore="true"
            />
          </video>
        </div>
      </div>
    </div>
    <div className="immersive-sticky-wrapper">
      <div className="isw-sp-right">
        <div
          id="marketing"
          data-w-id="1054017b-e2de-84f1-284b-1847a5f63323"
          className="isw-sp-right-block"
        >
          <div className="process_left-block">
            <div className="ir-card cc-nostyles">
              <h2 className="heading-2 cc-blue">
                Extended
                <br />
                Reality (XR)
              </h2>
              <p className="paragraph cc-mw-mtb cc-combo-white">
                Extended Reality (XR) creates a world where the boundaries of
                what's possible are redefined. With the help of Augmented
                Reality (AR), Virtual Reality (VR), and Mixed Reality (MR), the
                real world merges with the digital one, opening up completely
                new perspectives - welcome to the future of interaction.
              </p>
            </div>
          </div>
        </div>
        <div id="trainings" className="isw-sp-right-block_sec">
          <div className="process_left-block">
            <div className="ir-card cc-nostyles">
              <h2 className="heading-2 cc-purple">
                Artificial
                <br />
                Intelligence (AI)
              </h2>
              <p className="paragraph cc-mw-mtb cc-combo-white">
                Artificial Intelligence (AI) shapes the future by redefining the
                potential of human creativity and efficiency. Through deep
                learning algorithms and Machine Learning, AI enhances our
                ability to solve complex problems and create personalized
                experiences - Welcome to the era of intelligent innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container" />
    <div className="paddings-wrapper">
      <div className="container container-relative">
        <div className="bp-wrapper-02">
          <p className="body-paragraph body-paragraph_centered">
            To unlock unparalleled business value, inside360 is a unique blend
            of immersive AI company and venture builder.
          </p>
        </div>
        <div className="main-features__wrapper">
          <div className="mf-grid_01">
            <div className="pir-card">
              <div className="pir-card_inner">
                <div className="irf-wrapper-01">
                  <img
                    src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/65fdcab1760f3ceb322393b0_vr-glass_icon.svg"
                    loading="lazy"
                    alt=""
                    className="irf-icon-01"
                  />
                  <div className="card-title">10+ Years</div>
                  <div className="card-paragraph">Artifical Intelligence</div>
                </div>
              </div>
            </div>
            <div
              id="w-node-_53acd527-9463-83f6-7118-c5371eec470e-4a8b9025"
              className="pir-card"
            >
              <div className="pir-centercard_inner">
                <div className="ir-centercard-title">350+ Projects</div>
                <div className="card-paragraph card-paragraph_white">
                  ranging from mid-sized companies to Fortune 100 clients.
                </div>
                <img
                  src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/660595dbe8da00cbe6486c07_i360-glasses-mobile.png"
                  loading="lazy"
                  alt=""
                />
              </div>
            </div>
            <div className="pir-card">
              <div className="pir-card_inner">
                <div className="irf-wrapper-01">
                  <div className="card-title">78+ Talents</div>
                  <img
                    src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/65fdcc7d0dcddd1a9bb7bea2_team.png"
                    loading="lazy"
                    alt=""
                    className="irf-icon-02"
                  />
                </div>
              </div>
            </div>
            <div className="pir-card">
              <div className="pir-card_inner">
                <div className="irf-wrapper-01">
                  <img
                    src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/65fdcab18827f77ad4f63aeb_map.svg"
                    loading="lazy"
                    alt=""
                    className="irf-icon-01"
                  />
                  <div className="card-paragraph">focus on Europe</div>
                </div>
              </div>
            </div>
            <div className="pir-card">
              <div className="pir-card_inner">
                <div className="irf-wrapper-01">
                  <img
                    src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/65fdcab1b52460528003bd7a_rings_icon.svg"
                    loading="lazy"
                    alt=""
                    className="irf-icon-01"
                  />
                  <div className="card-title">XR meets AI</div>
                  <div className="card-paragraph">
                    Leveraging a unique tech stack
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mf-grid_02">
            <div className="ir-card">
              <div className="pir-card_inner">
                <div className="process-title">04</div>
                <div className="card-paragraph card-paragraph_white">
                  Spin-out companies
                </div>
              </div>
            </div>
            <div className="ir-card">
              <div className="pir-card_inner">
                <div className="irf-wrapper-01">
                  <img
                    src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/65fdcab1af9b773fe3c291c1_partnerships.svg"
                    loading="lazy"
                    alt=""
                    className="irf-icon-01"
                  />
                  <div className="card-paragraph card-paragraph_white">
                    End-to-end partnerships from concept to rollout
                  </div>
                </div>
              </div>
            </div>
            <div className="ir-card">
              <div className="pir-card_inner">
                <div className="irf-wrapper-01">
                  <img
                    src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/65fdcab1e053a84d8dfd6f61_meta.svg"
                    loading="lazy"
                    alt=""
                    className="irf-icon-01"
                  />
                  <div className="card-paragraph card-paragraph_white">
                    Official Meta Partner
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-features__desktop">
          <img
            src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/660ea23c202fc0805287d723_i360-nutshell_EN.png"
            loading="lazy"
            sizes="(max-width: 479px) 100vw, (max-width: 991px) 92vw, 992px"
            srcSet="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/660ea23c202fc0805287d723_i360-nutshell_EN-p-500.png 500w, https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/660ea23c202fc0805287d723_i360-nutshell_EN-p-800.png 800w, https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/660ea23c202fc0805287d723_i360-nutshell_EN.png 1482w"
            alt=""
            id="en-only"
            className="mfd-img"
          />
          <img
            src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/660ea2130a9ec7e5b3d3a1c5_i360-nutshell_DE.png"
            loading="lazy"
            sizes="(max-width: 479px) 100vw, (max-width: 991px) 92vw, 992px"
            srcSet="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/660ea2130a9ec7e5b3d3a1c5_i360-nutshell_DE-p-500.png 500w, https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/660ea2130a9ec7e5b3d3a1c5_i360-nutshell_DE-p-800.png 800w, https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/660ea2130a9ec7e5b3d3a1c5_i360-nutshell_DE.png 1482w"
            alt=""
            id="de-only"
            className="mfd-img"
          />
        </div>
      </div>
    </div>
    <div className="s-bottom-gradient" />
  </section>
  <div className="section-text-gradient-effect">
    <div
      data-w-id="1da08664-e32c-dc2a-67f9-bd8e9affb421"
      className="text-effect-wrapper"
    >
      <div className="text-effect-sticky-element">
        <div className="container-w3 gutter-outside">
          <div className="text-effect-overflow-hidden">
            <div className="text-effect-inner">
              <div className="text-effect-gradient">
                <div className="text-overlap-end" />
              </div>
              <p className="text-effect-text">
                In the last 2 years we have developed projects and companies
                that are now worth over 24 Mio. €.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section
    data-w-id="d73e0541-1302-b506-d7d2-c1aed64cec73"
    style={{ opacity: 0 }}
    className="section thidden"
  >
    <div className="container">
      <p className="body-paragraph body-paragraph_centered">
        We are a cutting-edge VR [Category]. A team of{" "}
        <span className="_380p-span cc-margins-rl">30+ visionairs</span> working
        together to to unlock unparalleled business value through virtual
        reality.From concept to impact. Every day.
      </p>
      <div className="main-features__wrapper">
        <div className="mf-grid_01">
          <div className="pir-card">
            <div className="pir-card_inner">
              <div className="irf-wrapper-01">
                <img
                  src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/65fdcab1760f3ceb322393b0_vr-glass_icon.svg"
                  loading="lazy"
                  alt=""
                  className="irf-icon-01"
                />
                <div className="card-title">10+ Years</div>
                <div className="card-paragraph">Artifical Intelligence</div>
              </div>
            </div>
          </div>
          <div
            id="w-node-c36fa4de-86e6-fd9d-2a7b-af02be178c36-4a8b9025"
            className="pir-card"
          >
            <div className="pir-centercard_inner">
              <div className="ir-centercard-title">350+ Projects</div>
              <div className="card-paragraph card-paragraph_white">
                ranging from mid-sized companies to Fortune 100 clients.
              </div>
              <img
                src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/65fdcab320d60d1b2ce42d5d_vision_pro_gp_lenses%201.svg"
                loading="lazy"
                alt=""
              />
            </div>
          </div>
          <div className="pir-card">
            <div className="pir-card_inner">
              <div className="irf-wrapper-01">
                <div className="card-title">78+ Talents</div>
                <img
                  src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/65fdcc7d0dcddd1a9bb7bea2_team.png"
                  loading="lazy"
                  alt=""
                  className="irf-icon-02"
                />
              </div>
            </div>
          </div>
          <div className="pir-card">
            <div className="pir-card_inner">
              <div className="irf-wrapper-01">
                <img
                  src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/65fdcab18827f77ad4f63aeb_map.svg"
                  loading="lazy"
                  alt=""
                  className="irf-icon-01"
                />
                <div className="card-paragraph">focus on Europe</div>
              </div>
            </div>
          </div>
          <div className="pir-card">
            <div className="pir-card_inner">
              <div className="irf-wrapper-01">
                <img
                  src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/65fdcab1b52460528003bd7a_rings_icon.svg"
                  loading="lazy"
                  alt=""
                  className="irf-icon-01"
                />
                <div className="card-title">XR meets AI</div>
                <div className="card-paragraph">
                  Leveraging a unique tech stack
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mf-grid_02">
          <div className="ir-card">
            <div className="pir-card_inner">
              <div className="process-title">04</div>
              <div className="card-paragraph card-paragraph_white">
                Spin-out companies
              </div>
            </div>
          </div>
          <div className="ir-card">
            <div className="pir-card_inner">
              <div className="irf-wrapper-01">
                <img
                  src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/65fdcab1af9b773fe3c291c1_partnerships.svg"
                  loading="lazy"
                  alt=""
                  className="irf-icon-01"
                />
                <div className="card-paragraph card-paragraph_white">
                  end-to-end partnerships from concept to rollout
                </div>
              </div>
            </div>
          </div>
          <div className="ir-card">
            <div className="pir-card_inner">
              <div className="irf-wrapper-01">
                <img
                  src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/65fdcab1e053a84d8dfd6f61_meta.svg"
                  loading="lazy"
                  alt=""
                  className="irf-icon-01"
                />
                <div className="card-paragraph card-paragraph_white">
                  Official Meta Partner
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section section-sfw">
    <div className="container container-cfw">
      <div className="recent-work_wrapper">
        <div className="rw-slide_wrapper">
          <div className="rw-slide">
            <img
              src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/656b27f5111dd4df1ee4f56d_rw-image-01.png"
              loading="lazy"
              sizes="100vw"
              srcSet="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/656b27f5111dd4df1ee4f56d_rw-image-01-p-500.png 500w, https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/656b27f5111dd4df1ee4f56d_rw-image-01-p-800.png 800w, https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/656b27f5111dd4df1ee4f56d_rw-image-01.png 992w"
              alt=""
              className="rw-slide_image"
            />
            <div className="rws-badge">
              <img
                src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/6568c63bfce75103cab6387d_Hyundai%20Logo.svg"
                loading="lazy"
                alt=""
                className="rw-company-logo"
              />
            </div>
          </div>
        </div>
        <div className="rw-slide_wrapper">
          <div className="rw-slide">
            <img
              src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/656b27f5111dd4df1ee4f56d_rw-image-01.png"
              loading="lazy"
              sizes="100vw"
              srcSet="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/656b27f5111dd4df1ee4f56d_rw-image-01-p-500.png 500w, https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/656b27f5111dd4df1ee4f56d_rw-image-01-p-800.png 800w, https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/656b27f5111dd4df1ee4f56d_rw-image-01.png 992w"
              alt=""
              className="rw-slide_image"
            />
            <div className="rws-badge">
              <img
                src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/656b067185b2a353316312e6_Liebherr%20Logo.svg"
                loading="lazy"
                alt=""
                className="rw-company-logo"
              />
            </div>
          </div>
        </div>
        <div className="rw-slide_wrapper">
          <div className="rw-slide">
            <img
              src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/656b27f5111dd4df1ee4f56d_rw-image-01.png"
              loading="lazy"
              sizes="100vw"
              srcSet="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/656b27f5111dd4df1ee4f56d_rw-image-01-p-500.png 500w, https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/656b27f5111dd4df1ee4f56d_rw-image-01-p-800.png 800w, https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/656b27f5111dd4df1ee4f56d_rw-image-01.png 992w"
              alt=""
              className="rw-slide_image"
            />
            <div className="rws-badge">
              <img
                src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/6568c63bfce75103cab6387d_Hyundai%20Logo.svg"
                loading="lazy"
                alt=""
                className="rw-company-logo"
              />
            </div>
          </div>
        </div>
        <div className="rw-slide_wrapper">
          <div className="rw-slide">
            <img
              src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/656b27f5111dd4df1ee4f56d_rw-image-01.png"
              loading="lazy"
              sizes="100vw"
              srcSet="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/656b27f5111dd4df1ee4f56d_rw-image-01-p-500.png 500w, https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/656b27f5111dd4df1ee4f56d_rw-image-01-p-800.png 800w, https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/656b27f5111dd4df1ee4f56d_rw-image-01.png 992w"
              alt=""
              className="rw-slide_image"
            />
            <div className="rws-badge">
              <img
                src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/656b067185b2a353316312e6_Liebherr%20Logo.svg"
                loading="lazy"
                alt=""
                className="rw-company-logo"
              />
            </div>
          </div>
        </div>
        <div className="rw-slide_wrapper">
          <div className="rw-slide">
            <img
              src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/656b27f5111dd4df1ee4f56d_rw-image-01.png"
              loading="lazy"
              sizes="100vw"
              srcSet="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/656b27f5111dd4df1ee4f56d_rw-image-01-p-500.png 500w, https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/656b27f5111dd4df1ee4f56d_rw-image-01-p-800.png 800w, https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/656b27f5111dd4df1ee4f56d_rw-image-01.png 992w"
              alt=""
              className="rw-slide_image"
            />
            <div className="rws-badge">
              <img
                src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/6568c63bfce75103cab6387d_Hyundai%20Logo.svg"
                loading="lazy"
                alt=""
                className="rw-company-logo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="rw-wrapper w-dyn-list">
        <div role="list" className="rw-list w-dyn-items">
          <div role="listitem" className="rw-item w-dyn-item">
            <div className="rw-slide_wrapper">
              <div className="rw-slide">
                <a
                  href="/projects/elektron-sales-experience"
                  className="link-block w-inline-block"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/65707596af688db23d753d73/66f2eee23008ec1fdbb44d0e_Elektron_Aufzug.png"
                    alt=""
                    className="rw-slide_image"
                  />
                </a>
                <div className="rws-badge-border-slider">
                  <div className="rws-badge">
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/65707596af688db23d753d73/660eb97b7e0de977bee5f1e8_ektrn-logo.png"
                      alt=""
                      className="rw-company-logo"
                    />
                  </div>
                </div>
              </div>
              <div
                fs-smartlightbox-element="lightbox"
                fs-scrolldisable-element="when-visible"
                className="rw-popup-overlay"
              >
                <div
                  data-w-id="0f50bb3f-458b-c09d-5e7f-07f01834d3b9"
                  className="rw-popup-close"
                />
                <div className="rw-popup">
                  <div className="rwp_image-block">
                    <img alt="" loading="lazy" src="" className="rwp_image" />
                  </div>
                  <div className="rwp-header">
                    <div className="rws-badge">
                      <img
                        src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/6568c63bfce75103cab6387d_Hyundai%20Logo.svg"
                        loading="lazy"
                        alt=""
                        className="rw-company-logo"
                      />
                    </div>
                    <h2 className="heading-2 heading-2-centered">
                      Project Name
                    </h2>
                  </div>
                  <div className="rwp-rt w-richtext">
                    <h1>Heading 1</h1>
                    <h2>Heading 2</h2>
                    <h3>Heading 3</h3>
                    <h4>Heading 4</h4>
                    <h5>Heading 5</h5>
                    <h6>Heading 6</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <blockquote>Block quote</blockquote>
                    <p>Ordered list</p>
                    <ol role="list">
                      <li>Item 1</li>
                      <li>Item 2</li>
                      <li>Item 3</li>
                    </ol>
                    <p>Unordered list</p>
                    <ul role="list">
                      <li>Item A</li>
                      <li>Item B</li>
                      <li>Item C</li>
                    </ul>
                    <a href="https://university.webflow.com/lesson/add-and-nest-text-links-in-webflow">
                      Text link
                    </a>
                    <p>
                      <strong>Bold text</strong>
                    </p>
                    <p>
                      <em>Emphasis</em>
                    </p>
                    <p>
                      <sup>Superscript</sup>
                    </p>
                    <p>
                      <sub>Subscript</sub>
                    </p>
                  </div>
                  <div className="carousel-wrapper">
                    <div className="trusted-title">
                      +350 PROJECTS FOR COMPANIES LIKE
                    </div>
                    <div className="trusted-carousel">
                      <div className="trusted-carousel_inner">
                        <div className="tc-slide">
                          <img
                            src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/6567a9aac4b5b82b9a49adff_logos-group.svg"
                            loading="lazy"
                            alt=""
                            className="tc-slide-image"
                          />
                        </div>
                        <div className="tc-slide">
                          <img
                            src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/6567a9aac4b5b82b9a49adff_logos-group.svg"
                            loading="lazy"
                            alt=""
                            className="tc-slide-image"
                          />
                        </div>
                      </div>
                      <div className="tc-left" />
                      <div className="tc-right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div role="listitem" className="rw-item w-dyn-item">
            <div className="rw-slide_wrapper">
              <div className="rw-slide">
                <a
                  href="/projects/vita-healthcare"
                  className="link-block w-inline-block"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/65707596af688db23d753d73/665883e20f14145c1f70ea2c_VitaStills_Showroom.jpg"
                    alt=""
                    sizes="(max-width: 991px) 98vw, 992px"
                    srcSet="https://cdn.prod.website-files.com/65707596af688db23d753d73/665883e20f14145c1f70ea2c_VitaStills_Showroom-p-500.jpg 500w, https://cdn.prod.website-files.com/65707596af688db23d753d73/665883e20f14145c1f70ea2c_VitaStills_Showroom-p-800.jpg 800w, https://cdn.prod.website-files.com/65707596af688db23d753d73/665883e20f14145c1f70ea2c_VitaStills_Showroom-p-1080.jpg 1080w, https://cdn.prod.website-files.com/65707596af688db23d753d73/665883e20f14145c1f70ea2c_VitaStills_Showroom-p-1600.jpg 1600w, https://cdn.prod.website-files.com/65707596af688db23d753d73/665883e20f14145c1f70ea2c_VitaStills_Showroom-p-2000.jpg 2000w, https://cdn.prod.website-files.com/65707596af688db23d753d73/665883e20f14145c1f70ea2c_VitaStills_Showroom.jpg 2200w"
                    className="rw-slide_image"
                  />
                </a>
                <div className="rws-badge-border-slider">
                  <div className="rws-badge">
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/65707596af688db23d753d73/661cf4bae9829a31c0d32dcc_vh-loho.svg"
                      alt=""
                      className="rw-company-logo"
                    />
                  </div>
                </div>
              </div>
              <div
                fs-smartlightbox-element="lightbox"
                fs-scrolldisable-element="when-visible"
                className="rw-popup-overlay"
              >
                <div
                  data-w-id="0f50bb3f-458b-c09d-5e7f-07f01834d3b9"
                  className="rw-popup-close"
                />
                <div className="rw-popup">
                  <div className="rwp_image-block">
                    <img alt="" loading="lazy" src="" className="rwp_image" />
                  </div>
                  <div className="rwp-header">
                    <div className="rws-badge">
                      <img
                        src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/6568c63bfce75103cab6387d_Hyundai%20Logo.svg"
                        loading="lazy"
                        alt=""
                        className="rw-company-logo"
                      />
                    </div>
                    <h2 className="heading-2 heading-2-centered">
                      Project Name
                    </h2>
                  </div>
                  <div className="rwp-rt w-richtext">
                    <h1>Heading 1</h1>
                    <h2>Heading 2</h2>
                    <h3>Heading 3</h3>
                    <h4>Heading 4</h4>
                    <h5>Heading 5</h5>
                    <h6>Heading 6</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <blockquote>Block quote</blockquote>
                    <p>Ordered list</p>
                    <ol role="list">
                      <li>Item 1</li>
                      <li>Item 2</li>
                      <li>Item 3</li>
                    </ol>
                    <p>Unordered list</p>
                    <ul role="list">
                      <li>Item A</li>
                      <li>Item B</li>
                      <li>Item C</li>
                    </ul>
                    <a href="https://university.webflow.com/lesson/add-and-nest-text-links-in-webflow">
                      Text link
                    </a>
                    <p>
                      <strong>Bold text</strong>
                    </p>
                    <p>
                      <em>Emphasis</em>
                    </p>
                    <p>
                      <sup>Superscript</sup>
                    </p>
                    <p>
                      <sub>Subscript</sub>
                    </p>
                  </div>
                  <div className="carousel-wrapper">
                    <div className="trusted-title">
                      +350 PROJECTS FOR COMPANIES LIKE
                    </div>
                    <div className="trusted-carousel">
                      <div className="trusted-carousel_inner">
                        <div className="tc-slide">
                          <img
                            src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/6567a9aac4b5b82b9a49adff_logos-group.svg"
                            loading="lazy"
                            alt=""
                            className="tc-slide-image"
                          />
                        </div>
                        <div className="tc-slide">
                          <img
                            src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/6567a9aac4b5b82b9a49adff_logos-group.svg"
                            loading="lazy"
                            alt=""
                            className="tc-slide-image"
                          />
                        </div>
                      </div>
                      <div className="tc-left" />
                      <div className="tc-right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div role="listitem" className="rw-item w-dyn-item">
            <div className="rw-slide_wrapper">
              <div className="rw-slide">
                <a
                  href="/projects/hyundai"
                  className="link-block w-inline-block"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/65707596af688db23d753d73/66f2eec56b7b3ab5dccf5830_Hyundai.png"
                    alt=""
                    className="rw-slide_image"
                  />
                </a>
                <div className="rws-badge-border-slider">
                  <div className="rws-badge">
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/65707596af688db23d753d73/661cf60c565e98ecd79ac07e_h-logo.svg"
                      alt=""
                      className="rw-company-logo"
                    />
                  </div>
                </div>
              </div>
              <div
                fs-smartlightbox-element="lightbox"
                fs-scrolldisable-element="when-visible"
                className="rw-popup-overlay"
              >
                <div
                  data-w-id="0f50bb3f-458b-c09d-5e7f-07f01834d3b9"
                  className="rw-popup-close"
                />
                <div className="rw-popup">
                  <div className="rwp_image-block">
                    <img alt="" loading="lazy" src="" className="rwp_image" />
                  </div>
                  <div className="rwp-header">
                    <div className="rws-badge">
                      <img
                        src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/6568c63bfce75103cab6387d_Hyundai%20Logo.svg"
                        loading="lazy"
                        alt=""
                        className="rw-company-logo"
                      />
                    </div>
                    <h2 className="heading-2 heading-2-centered">
                      Project Name
                    </h2>
                  </div>
                  <div className="rwp-rt w-richtext">
                    <h1>Heading 1</h1>
                    <h2>Heading 2</h2>
                    <h3>Heading 3</h3>
                    <h4>Heading 4</h4>
                    <h5>Heading 5</h5>
                    <h6>Heading 6</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <blockquote>Block quote</blockquote>
                    <p>Ordered list</p>
                    <ol role="list">
                      <li>Item 1</li>
                      <li>Item 2</li>
                      <li>Item 3</li>
                    </ol>
                    <p>Unordered list</p>
                    <ul role="list">
                      <li>Item A</li>
                      <li>Item B</li>
                      <li>Item C</li>
                    </ul>
                    <a href="https://university.webflow.com/lesson/add-and-nest-text-links-in-webflow">
                      Text link
                    </a>
                    <p>
                      <strong>Bold text</strong>
                    </p>
                    <p>
                      <em>Emphasis</em>
                    </p>
                    <p>
                      <sup>Superscript</sup>
                    </p>
                    <p>
                      <sub>Subscript</sub>
                    </p>
                  </div>
                  <div className="carousel-wrapper">
                    <div className="trusted-title">
                      +350 PROJECTS FOR COMPANIES LIKE
                    </div>
                    <div className="trusted-carousel">
                      <div className="trusted-carousel_inner">
                        <div className="tc-slide">
                          <img
                            src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/6567a9aac4b5b82b9a49adff_logos-group.svg"
                            loading="lazy"
                            alt=""
                            className="tc-slide-image"
                          />
                        </div>
                        <div className="tc-slide">
                          <img
                            src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/6567a9aac4b5b82b9a49adff_logos-group.svg"
                            loading="lazy"
                            alt=""
                            className="tc-slide-image"
                          />
                        </div>
                      </div>
                      <div className="tc-left" />
                      <div className="tc-right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div role="listitem" className="rw-item w-dyn-item">
            <div className="rw-slide_wrapper">
              <div className="rw-slide">
                <a
                  href="/projects/otto-junker"
                  className="link-block w-inline-block"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/65707596af688db23d753d73/665890d4e92323c9f7eacc10_ThrysistorWithout1_0000_Ultra.jpg"
                    alt=""
                    sizes="(max-width: 991px) 98vw, 992px"
                    srcSet="https://cdn.prod.website-files.com/65707596af688db23d753d73/665890d4e92323c9f7eacc10_ThrysistorWithout1_0000_Ultra-p-500.jpg 500w, https://cdn.prod.website-files.com/65707596af688db23d753d73/665890d4e92323c9f7eacc10_ThrysistorWithout1_0000_Ultra-p-800.jpg 800w, https://cdn.prod.website-files.com/65707596af688db23d753d73/665890d4e92323c9f7eacc10_ThrysistorWithout1_0000_Ultra-p-1080.jpg 1080w, https://cdn.prod.website-files.com/65707596af688db23d753d73/665890d4e92323c9f7eacc10_ThrysistorWithout1_0000_Ultra-p-1600.jpg 1600w, https://cdn.prod.website-files.com/65707596af688db23d753d73/665890d4e92323c9f7eacc10_ThrysistorWithout1_0000_Ultra.jpg 1920w"
                    className="rw-slide_image"
                  />
                </a>
                <div className="rws-badge-border-slider">
                  <div className="rws-badge">
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/65707596af688db23d753d73/661cf6ba698f91afd3cda789_oj-logo.svg"
                      alt=""
                      className="rw-company-logo"
                    />
                  </div>
                </div>
              </div>
              <div
                fs-smartlightbox-element="lightbox"
                fs-scrolldisable-element="when-visible"
                className="rw-popup-overlay"
              >
                <div
                  data-w-id="0f50bb3f-458b-c09d-5e7f-07f01834d3b9"
                  className="rw-popup-close"
                />
                <div className="rw-popup">
                  <div className="rwp_image-block">
                    <img alt="" loading="lazy" src="" className="rwp_image" />
                  </div>
                  <div className="rwp-header">
                    <div className="rws-badge">
                      <img
                        src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/6568c63bfce75103cab6387d_Hyundai%20Logo.svg"
                        loading="lazy"
                        alt=""
                        className="rw-company-logo"
                      />
                    </div>
                    <h2 className="heading-2 heading-2-centered">
                      Project Name
                    </h2>
                  </div>
                  <div className="rwp-rt w-richtext">
                    <h1>Heading 1</h1>
                    <h2>Heading 2</h2>
                    <h3>Heading 3</h3>
                    <h4>Heading 4</h4>
                    <h5>Heading 5</h5>
                    <h6>Heading 6</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <blockquote>Block quote</blockquote>
                    <p>Ordered list</p>
                    <ol role="list">
                      <li>Item 1</li>
                      <li>Item 2</li>
                      <li>Item 3</li>
                    </ol>
                    <p>Unordered list</p>
                    <ul role="list">
                      <li>Item A</li>
                      <li>Item B</li>
                      <li>Item C</li>
                    </ul>
                    <a href="https://university.webflow.com/lesson/add-and-nest-text-links-in-webflow">
                      Text link
                    </a>
                    <p>
                      <strong>Bold text</strong>
                    </p>
                    <p>
                      <em>Emphasis</em>
                    </p>
                    <p>
                      <sup>Superscript</sup>
                    </p>
                    <p>
                      <sub>Subscript</sub>
                    </p>
                  </div>
                  <div className="carousel-wrapper">
                    <div className="trusted-title">
                      +350 PROJECTS FOR COMPANIES LIKE
                    </div>
                    <div className="trusted-carousel">
                      <div className="trusted-carousel_inner">
                        <div className="tc-slide">
                          <img
                            src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/6567a9aac4b5b82b9a49adff_logos-group.svg"
                            loading="lazy"
                            alt=""
                            className="tc-slide-image"
                          />
                        </div>
                        <div className="tc-slide">
                          <img
                            src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/6567a9aac4b5b82b9a49adff_logos-group.svg"
                            loading="lazy"
                            alt=""
                            className="tc-slide-image"
                          />
                        </div>
                      </div>
                      <div className="tc-left" />
                      <div className="tc-right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div role="listitem" className="rw-item w-dyn-item">
            <div className="rw-slide_wrapper">
              <div className="rw-slide">
                <a
                  href="/projects/emerse"
                  className="link-block w-inline-block"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/65707596af688db23d753d73/6658886a97ecafa412da273e_emerse_Website.jpg"
                    alt=""
                    sizes="(max-width: 991px) 98vw, 992px"
                    srcSet="https://cdn.prod.website-files.com/65707596af688db23d753d73/6658886a97ecafa412da273e_emerse_Website-p-500.jpg 500w, https://cdn.prod.website-files.com/65707596af688db23d753d73/6658886a97ecafa412da273e_emerse_Website-p-800.jpg 800w, https://cdn.prod.website-files.com/65707596af688db23d753d73/6658886a97ecafa412da273e_emerse_Website-p-1080.jpg 1080w, https://cdn.prod.website-files.com/65707596af688db23d753d73/6658886a97ecafa412da273e_emerse_Website-p-1600.jpg 1600w, https://cdn.prod.website-files.com/65707596af688db23d753d73/6658886a97ecafa412da273e_emerse_Website-p-2000.jpg 2000w, https://cdn.prod.website-files.com/65707596af688db23d753d73/6658886a97ecafa412da273e_emerse_Website.jpg 2200w"
                    className="rw-slide_image"
                  />
                </a>
                <div className="rws-badge-border-slider">
                  <div className="rws-badge">
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/65707596af688db23d753d73/6658883013565381e04d6568_645e2aa284f15fc8051613e1_emerse-grey.svg"
                      alt=""
                      className="rw-company-logo"
                    />
                  </div>
                </div>
              </div>
              <div
                fs-smartlightbox-element="lightbox"
                fs-scrolldisable-element="when-visible"
                className="rw-popup-overlay"
              >
                <div
                  data-w-id="0f50bb3f-458b-c09d-5e7f-07f01834d3b9"
                  className="rw-popup-close"
                />
                <div className="rw-popup">
                  <div className="rwp_image-block">
                    <img alt="" loading="lazy" src="" className="rwp_image" />
                  </div>
                  <div className="rwp-header">
                    <div className="rws-badge">
                      <img
                        src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/6568c63bfce75103cab6387d_Hyundai%20Logo.svg"
                        loading="lazy"
                        alt=""
                        className="rw-company-logo"
                      />
                    </div>
                    <h2 className="heading-2 heading-2-centered">
                      Project Name
                    </h2>
                  </div>
                  <div className="rwp-rt w-richtext">
                    <h1>Heading 1</h1>
                    <h2>Heading 2</h2>
                    <h3>Heading 3</h3>
                    <h4>Heading 4</h4>
                    <h5>Heading 5</h5>
                    <h6>Heading 6</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <blockquote>Block quote</blockquote>
                    <p>Ordered list</p>
                    <ol role="list">
                      <li>Item 1</li>
                      <li>Item 2</li>
                      <li>Item 3</li>
                    </ol>
                    <p>Unordered list</p>
                    <ul role="list">
                      <li>Item A</li>
                      <li>Item B</li>
                      <li>Item C</li>
                    </ul>
                    <a href="https://university.webflow.com/lesson/add-and-nest-text-links-in-webflow">
                      Text link
                    </a>
                    <p>
                      <strong>Bold text</strong>
                    </p>
                    <p>
                      <em>Emphasis</em>
                    </p>
                    <p>
                      <sup>Superscript</sup>
                    </p>
                    <p>
                      <sub>Subscript</sub>
                    </p>
                  </div>
                  <div className="carousel-wrapper">
                    <div className="trusted-title">
                      +350 PROJECTS FOR COMPANIES LIKE
                    </div>
                    <div className="trusted-carousel">
                      <div className="trusted-carousel_inner">
                        <div className="tc-slide">
                          <img
                            src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/6567a9aac4b5b82b9a49adff_logos-group.svg"
                            loading="lazy"
                            alt=""
                            className="tc-slide-image"
                          />
                        </div>
                        <div className="tc-slide">
                          <img
                            src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/6567a9aac4b5b82b9a49adff_logos-group.svg"
                            loading="lazy"
                            alt=""
                            className="tc-slide-image"
                          />
                        </div>
                      </div>
                      <div className="tc-left" />
                      <div className="tc-right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div role="listitem" className="rw-item w-dyn-item">
            <div className="rw-slide_wrapper">
              <div className="rw-slide">
                <a
                  href="/projects/medverse"
                  className="link-block w-inline-block"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/65707596af688db23d753d73/66588aed3305cd768c3d8bcb_com.oculus.vrshell-20240522-132446.00_19_24_19.Standbild003.jpg"
                    alt=""
                    sizes="(max-width: 991px) 98vw, 992px"
                    srcSet="https://cdn.prod.website-files.com/65707596af688db23d753d73/66588aed3305cd768c3d8bcb_com.oculus.vrshell-20240522-132446.00_19_24_19.Standbild003-p-500.jpg 500w, https://cdn.prod.website-files.com/65707596af688db23d753d73/66588aed3305cd768c3d8bcb_com.oculus.vrshell-20240522-132446.00_19_24_19.Standbild003-p-800.jpg 800w, https://cdn.prod.website-files.com/65707596af688db23d753d73/66588aed3305cd768c3d8bcb_com.oculus.vrshell-20240522-132446.00_19_24_19.Standbild003-p-1080.jpg 1080w, https://cdn.prod.website-files.com/65707596af688db23d753d73/66588aed3305cd768c3d8bcb_com.oculus.vrshell-20240522-132446.00_19_24_19.Standbild003-p-1600.jpg 1600w, https://cdn.prod.website-files.com/65707596af688db23d753d73/66588aed3305cd768c3d8bcb_com.oculus.vrshell-20240522-132446.00_19_24_19.Standbild003.jpg 1920w"
                    className="rw-slide_image"
                  />
                </a>
                <div className="rws-badge-border-slider">
                  <div className="rws-badge">
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/65707596af688db23d753d73/66588abb7597181cc747379d_Group%20164.png"
                      alt=""
                      className="rw-company-logo"
                    />
                  </div>
                </div>
              </div>
              <div
                fs-smartlightbox-element="lightbox"
                fs-scrolldisable-element="when-visible"
                className="rw-popup-overlay"
              >
                <div
                  data-w-id="0f50bb3f-458b-c09d-5e7f-07f01834d3b9"
                  className="rw-popup-close"
                />
                <div className="rw-popup">
                  <div className="rwp_image-block">
                    <img alt="" loading="lazy" src="" className="rwp_image" />
                  </div>
                  <div className="rwp-header">
                    <div className="rws-badge">
                      <img
                        src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/6568c63bfce75103cab6387d_Hyundai%20Logo.svg"
                        loading="lazy"
                        alt=""
                        className="rw-company-logo"
                      />
                    </div>
                    <h2 className="heading-2 heading-2-centered">
                      Project Name
                    </h2>
                  </div>
                  <div className="rwp-rt w-richtext">
                    <h1>Heading 1</h1>
                    <h2>Heading 2</h2>
                    <h3>Heading 3</h3>
                    <h4>Heading 4</h4>
                    <h5>Heading 5</h5>
                    <h6>Heading 6</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <blockquote>Block quote</blockquote>
                    <p>Ordered list</p>
                    <ol role="list">
                      <li>Item 1</li>
                      <li>Item 2</li>
                      <li>Item 3</li>
                    </ol>
                    <p>Unordered list</p>
                    <ul role="list">
                      <li>Item A</li>
                      <li>Item B</li>
                      <li>Item C</li>
                    </ul>
                    <a href="https://university.webflow.com/lesson/add-and-nest-text-links-in-webflow">
                      Text link
                    </a>
                    <p>
                      <strong>Bold text</strong>
                    </p>
                    <p>
                      <em>Emphasis</em>
                    </p>
                    <p>
                      <sup>Superscript</sup>
                    </p>
                    <p>
                      <sub>Subscript</sub>
                    </p>
                  </div>
                  <div className="carousel-wrapper">
                    <div className="trusted-title">
                      +350 PROJECTS FOR COMPANIES LIKE
                    </div>
                    <div className="trusted-carousel">
                      <div className="trusted-carousel_inner">
                        <div className="tc-slide">
                          <img
                            src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/6567a9aac4b5b82b9a49adff_logos-group.svg"
                            loading="lazy"
                            alt=""
                            className="tc-slide-image"
                          />
                        </div>
                        <div className="tc-slide">
                          <img
                            src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/6567a9aac4b5b82b9a49adff_logos-group.svg"
                            loading="lazy"
                            alt=""
                            className="tc-slide-image"
                          />
                        </div>
                      </div>
                      <div className="tc-left" />
                      <div className="tc-right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div role="listitem" className="rw-item w-dyn-item">
            <div className="rw-slide_wrapper">
              <div className="rw-slide">
                <a href="/projects/lynkt" className="link-block w-inline-block">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/65707596af688db23d753d73/665890e32261a44a07f40ce2_lynkt.jpg"
                    alt=""
                    sizes="(max-width: 991px) 98vw, 992px"
                    srcSet="https://cdn.prod.website-files.com/65707596af688db23d753d73/665890e32261a44a07f40ce2_lynkt-p-500.jpg 500w, https://cdn.prod.website-files.com/65707596af688db23d753d73/665890e32261a44a07f40ce2_lynkt-p-800.jpg 800w, https://cdn.prod.website-files.com/65707596af688db23d753d73/665890e32261a44a07f40ce2_lynkt-p-1080.jpg 1080w, https://cdn.prod.website-files.com/65707596af688db23d753d73/665890e32261a44a07f40ce2_lynkt-p-1600.jpg 1600w, https://cdn.prod.website-files.com/65707596af688db23d753d73/665890e32261a44a07f40ce2_lynkt.jpg 1920w"
                    className="rw-slide_image"
                  />
                </a>
                <div className="rws-badge-border-slider">
                  <div className="rws-badge">
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/65707596af688db23d753d73/66588bbce5b2228631c86397_lynkt.svg"
                      alt=""
                      className="rw-company-logo"
                    />
                  </div>
                </div>
              </div>
              <div
                fs-smartlightbox-element="lightbox"
                fs-scrolldisable-element="when-visible"
                className="rw-popup-overlay"
              >
                <div
                  data-w-id="0f50bb3f-458b-c09d-5e7f-07f01834d3b9"
                  className="rw-popup-close"
                />
                <div className="rw-popup">
                  <div className="rwp_image-block">
                    <img alt="" loading="lazy" src="" className="rwp_image" />
                  </div>
                  <div className="rwp-header">
                    <div className="rws-badge">
                      <img
                        src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/6568c63bfce75103cab6387d_Hyundai%20Logo.svg"
                        loading="lazy"
                        alt=""
                        className="rw-company-logo"
                      />
                    </div>
                    <h2 className="heading-2 heading-2-centered">
                      Project Name
                    </h2>
                  </div>
                  <div className="rwp-rt w-richtext">
                    <h1>Heading 1</h1>
                    <h2>Heading 2</h2>
                    <h3>Heading 3</h3>
                    <h4>Heading 4</h4>
                    <h5>Heading 5</h5>
                    <h6>Heading 6</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <blockquote>Block quote</blockquote>
                    <p>Ordered list</p>
                    <ol role="list">
                      <li>Item 1</li>
                      <li>Item 2</li>
                      <li>Item 3</li>
                    </ol>
                    <p>Unordered list</p>
                    <ul role="list">
                      <li>Item A</li>
                      <li>Item B</li>
                      <li>Item C</li>
                    </ul>
                    <a href="https://university.webflow.com/lesson/add-and-nest-text-links-in-webflow">
                      Text link
                    </a>
                    <p>
                      <strong>Bold text</strong>
                    </p>
                    <p>
                      <em>Emphasis</em>
                    </p>
                    <p>
                      <sup>Superscript</sup>
                    </p>
                    <p>
                      <sub>Subscript</sub>
                    </p>
                  </div>
                  <div className="carousel-wrapper">
                    <div className="trusted-title">
                      +350 PROJECTS FOR COMPANIES LIKE
                    </div>
                    <div className="trusted-carousel">
                      <div className="trusted-carousel_inner">
                        <div className="tc-slide">
                          <img
                            src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/6567a9aac4b5b82b9a49adff_logos-group.svg"
                            loading="lazy"
                            alt=""
                            className="tc-slide-image"
                          />
                        </div>
                        <div className="tc-slide">
                          <img
                            src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/6567a9aac4b5b82b9a49adff_logos-group.svg"
                            loading="lazy"
                            alt=""
                            className="tc-slide-image"
                          />
                        </div>
                      </div>
                      <div className="tc-left" />
                      <div className="tc-right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div role="listitem" className="rw-item w-dyn-item">
            <div className="rw-slide_wrapper">
              <div className="rw-slide">
                <a
                  href="/projects/improvr"
                  className="link-block w-inline-block"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/65707596af688db23d753d73/6658931100634a48330a7077_az.jpg"
                    alt=""
                    sizes="(max-width: 991px) 98vw, 992px"
                    srcSet="https://cdn.prod.website-files.com/65707596af688db23d753d73/6658931100634a48330a7077_az-p-500.jpg 500w, https://cdn.prod.website-files.com/65707596af688db23d753d73/6658931100634a48330a7077_az-p-800.jpg 800w, https://cdn.prod.website-files.com/65707596af688db23d753d73/6658931100634a48330a7077_az-p-1080.jpg 1080w, https://cdn.prod.website-files.com/65707596af688db23d753d73/6658931100634a48330a7077_az.jpg 1506w"
                    className="rw-slide_image"
                  />
                </a>
                <div className="rws-badge-border-slider">
                  <div className="rws-badge">
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/65707596af688db23d753d73/66588c29edea49a148024179_Bildschirmfoto%202024-05-10%20um%2020.50%201.png"
                      alt=""
                      sizes="(max-width: 991px) 80px, 113.9140625px"
                      srcSet="https://cdn.prod.website-files.com/65707596af688db23d753d73/66588c29edea49a148024179_Bildschirmfoto%202024-05-10%20um%2020.50%201-p-500.png 500w, https://cdn.prod.website-files.com/65707596af688db23d753d73/66588c29edea49a148024179_Bildschirmfoto%202024-05-10%20um%2020.50%201.png 571w"
                      className="rw-company-logo"
                    />
                  </div>
                </div>
              </div>
              <div
                fs-smartlightbox-element="lightbox"
                fs-scrolldisable-element="when-visible"
                className="rw-popup-overlay"
              >
                <div
                  data-w-id="0f50bb3f-458b-c09d-5e7f-07f01834d3b9"
                  className="rw-popup-close"
                />
                <div className="rw-popup">
                  <div className="rwp_image-block">
                    <img alt="" loading="lazy" src="" className="rwp_image" />
                  </div>
                  <div className="rwp-header">
                    <div className="rws-badge">
                      <img
                        src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/6568c63bfce75103cab6387d_Hyundai%20Logo.svg"
                        loading="lazy"
                        alt=""
                        className="rw-company-logo"
                      />
                    </div>
                    <h2 className="heading-2 heading-2-centered">
                      Project Name
                    </h2>
                  </div>
                  <div className="rwp-rt w-richtext">
                    <h1>Heading 1</h1>
                    <h2>Heading 2</h2>
                    <h3>Heading 3</h3>
                    <h4>Heading 4</h4>
                    <h5>Heading 5</h5>
                    <h6>Heading 6</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <blockquote>Block quote</blockquote>
                    <p>Ordered list</p>
                    <ol role="list">
                      <li>Item 1</li>
                      <li>Item 2</li>
                      <li>Item 3</li>
                    </ol>
                    <p>Unordered list</p>
                    <ul role="list">
                      <li>Item A</li>
                      <li>Item B</li>
                      <li>Item C</li>
                    </ul>
                    <a href="https://university.webflow.com/lesson/add-and-nest-text-links-in-webflow">
                      Text link
                    </a>
                    <p>
                      <strong>Bold text</strong>
                    </p>
                    <p>
                      <em>Emphasis</em>
                    </p>
                    <p>
                      <sup>Superscript</sup>
                    </p>
                    <p>
                      <sub>Subscript</sub>
                    </p>
                  </div>
                  <div className="carousel-wrapper">
                    <div className="trusted-title">
                      +350 PROJECTS FOR COMPANIES LIKE
                    </div>
                    <div className="trusted-carousel">
                      <div className="trusted-carousel_inner">
                        <div className="tc-slide">
                          <img
                            src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/6567a9aac4b5b82b9a49adff_logos-group.svg"
                            loading="lazy"
                            alt=""
                            className="tc-slide-image"
                          />
                        </div>
                        <div className="tc-slide">
                          <img
                            src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/6567a9aac4b5b82b9a49adff_logos-group.svg"
                            loading="lazy"
                            alt=""
                            className="tc-slide-image"
                          />
                        </div>
                      </div>
                      <div className="tc-left" />
                      <div className="tc-right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rw-hidden">
        <div className="rw-item custom-1" />
        <div className="rw-item custom-2" />
        <div className="rw-item custom-3" />
        <div className="rw-item custom-4" />
        <div className="rw-item custom-5" />
        <div className="rw-item custom-6" />
        <div className="rw-item custom-7" />
        <div className="rw-item custom-8" />
        <div className="rw-item custom-9" />
      </div>
    </div>
  </section>
  <section className="section testimonials-section">
    <div className="container" />
    <div
      data-delay={12000}
      data-animation="slide"
      className="t-slider w-slider"
      data-autoplay="true"
      data-easing="ease"
      data-hide-arrows="false"
      data-disable-swipe="false"
      data-autoplay-limit={0}
      data-nav-spacing={3}
      data-duration={1000}
      data-infinite="true"
    >
      <div className="t-slider-mask w-slider-mask">
        <div className="t-slide w-slide">
          <div className="t-slide_wrapper">
            <p className="t-paragraph">
              “With clear unique selling points, the inside360 team not only
              unveiled previously unnoticed process potentials at the point of
              sale with their innovative power but also turned them into a solid
              return on investment.”
            </p>
            <p className="t-name">
              <strong className="bold-text">Hubert Deutsch </strong>
              <br />
              <span className="t-position">
                CEO Cteam Consulting &amp; Anlagenbau GmbH
              </span>
            </p>
          </div>
        </div>
        <div className="t-slide w-slide">
          <div className="t-slide_wrapper">
            <p className="t-paragraph">
              “I have never worked with such a professional and straightforward
              external service provider. Developing a VR application with this
              excellent project management is a pleasure!”
            </p>
            <p className="t-name">
              <strong className="bold-text">Claudia Hunziker </strong>
              <br />
              <span className="t-position">
                Business Unit Head Vita Health Care,
                <br />
                Member of the Management Board Doetsch Grether AG
              </span>
            </p>
          </div>
        </div>
        <div className="t-slide w-slide">
          <div className="t-slide_wrapper">
            <p className="t-paragraph">
              “The competent team at inside360 showed us creative approaches to
              convince doctors at on-site appointments and trade fairs to
              address and seriously pursue the disease earlier.”
            </p>
            <p className="t-name">
              <strong className="bold-text">Isabelle Harsch</strong>
              <br />
              <span className="t-position">
                Former Brand Leader Diabetes, AstraZeneca AG
              </span>
            </p>
          </div>
        </div>
        <div className="t-slide w-slide">
          <div className="t-slide_wrapper">
            <p className="t-paragraph">
              “Virtual Reality is an important component of Hyundai’s
              comprehensive digitalization strategy. It enables our dealers to
              engage with customers more convincingly and trustingly.”
            </p>
            <p className="t-name">
              <strong className="bold-text">Karl Hell</strong>
              <span className="t-position">
                Former Division Manager at Hyundai Motor Deutschland GmbH
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="ts-arrow ts-arrow_left w-slider-arrow-left">
        <img
          src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/665750ce848c2e4898a35304_Arrow-left.svg"
          loading="lazy"
          alt=""
          className="ts-arrow_icon"
        />
      </div>
      <div className="ts-arrow ts-arrow_right w-slider-arrow-right">
        <img
          src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/665750ce3e0e8327777ce94d_Arrow-right.svg"
          loading="lazy"
          alt=""
          className="ts-arrow_icon"
        />
      </div>
      <div className="t-slide-nav w-slider-nav w-round w-num" />
    </div>
  </section>
  <section data-w-id="50089c94-a0f3-79ab-713c-5491127a915f" className="section">
    <div className="container">
      <h2
        data-w-id="ba5d6275-4274-6fb6-ee7b-893818c9d6cf"
        style={{ opacity: 0 }}
        className="heading-2 heading-2-centered"
      >
        TECH&nbsp;&amp; PROCESS
      </h2>
      <div className="process-grid">
        <div
          data-w-id="77903219-80a8-b8a8-b80f-017d5d787e7c"
          className="pir-card-sm"
        >
          <div className="ir-card_inner">
            <div className="process-title">AI</div>
            <div className="card-paragraph">Artificial Intelligence</div>
          </div>
        </div>
        <div
          data-w-id="3b33faf6-932b-a1e9-bb7a-adce6c3ebc51"
          className="pir-card-sm"
        >
          <div className="ir-card_inner">
            <div className="process-title">VR</div>
            <div className="card-paragraph">Virtual Reality</div>
          </div>
        </div>
        <div
          data-w-id="e7edf91d-8826-91cf-a93a-245992998e99"
          className="pir-card-sm"
        >
          <div className="ir-card_inner">
            <div className="process-title">AR</div>
            <div className="card-paragraph">Augmented Reality</div>
          </div>
        </div>
        <div
          data-w-id="09c2e301-1d4d-f628-3f4c-9a40888df075"
          className="pir-card-sm"
        >
          <div className="ir-card_inner">
            <div className="process-title">MR</div>
            <div className="card-paragraph">Mixed Reality</div>
          </div>
        </div>
        <div
          data-w-id="161ce33b-6cca-657e-02cd-9a1da4681411"
          className="pir-card-sm"
        >
          <div className="ir-card_inner">
            <div className="process-title">3D</div>
            <div className="card-paragraph">3D &amp; 360° Content</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    data-w-id="55851084-8416-a468-7105-64cfe3ac58fc"
    className="section immersive-section no-margin-top"
  >
    <div className="container">
      <div
        data-w-id="55851084-8416-a468-7105-64cfe3ac58fe"
        className="case-scroll"
      >
        <div className="process-left">
          <div id="marketing" className="process_left-block">
            <div className="ir-card">
              <div className="ir-card_inner">
                <div className="glowing-wrapper glowing-wrapper-active">
                  <div className="glowing-wrapper-animations">
                    <div className="glowing-wrapper-glow" />
                    <div className="glowing-wrapper-mask-wrapper">
                      <div className="glowing-wrapper-mask" />
                    </div>
                  </div>
                  <div className="glowing-wrapper-borders-masker">
                    <div className="glowing-wrapper-borders" />
                  </div>
                  <a
                    href="/contact"
                    className="glowing-wrapper-number w-inline-block"
                  >
                    <div className="number-text">1</div>
                  </a>
                </div>
                <div className="spacer-30" />
                <h2 className="heading-2-sm">
                  Impact
                  <br />
                  Analysis
                </h2>
                <p className="paragraph ir-paragraph">
                  Together, we identify hidden opportunities and develop a
                  tailored plan to make visions become reality.
                </p>
              </div>
            </div>
          </div>
          <div id="marketing" className="process_left-block">
            <div className="ir-card">
              <div className="ir-card_inner">
                <div className="glowing-wrapper glowing-wrapper-active">
                  <div className="glowing-wrapper-animations">
                    <div className="glowing-wrapper-glow" />
                    <div className="glowing-wrapper-mask-wrapper">
                      <div className="glowing-wrapper-mask" />
                    </div>
                  </div>
                  <div className="glowing-wrapper-borders-masker">
                    <div className="glowing-wrapper-borders" />
                  </div>
                  <a
                    href="/contact"
                    className="glowing-wrapper-number w-inline-block"
                  >
                    <div className="number-text">2</div>
                  </a>
                </div>
                <div className="spacer-30" />
                <h2 className="heading-2-sm">Pilot &amp; Validation</h2>
                <p className="paragraph ir-paragraph">
                  Starting with a customized pilot project, we make sure the
                  solution provides real value to business.
                </p>
              </div>
            </div>
          </div>
          <div id="marketing" className="process_left-block">
            <div className="ir-card">
              <div className="ir-card_inner">
                <div className="glowing-wrapper glowing-wrapper-active">
                  <div className="glowing-wrapper-animations">
                    <div className="glowing-wrapper-glow" />
                    <div className="glowing-wrapper-mask-wrapper">
                      <div className="glowing-wrapper-mask" />
                    </div>
                  </div>
                  <div className="glowing-wrapper-borders-masker">
                    <div className="glowing-wrapper-borders" />
                  </div>
                  <a
                    href="/contact"
                    className="glowing-wrapper-number w-inline-block"
                  >
                    <div className="number-text">3</div>
                  </a>
                </div>
                <div className="spacer-30" />
                <h2 className="heading-2-sm">Project &amp; Rollout</h2>
                <p className="paragraph ir-paragraph">
                  We're advancing the further implementation of the vision,
                  emphasizing a smooth and professional rollout across the
                  entire company.
                </p>
              </div>
            </div>
          </div>
          <div id="marketing" className="process_left-block">
            <div className="ir-card">
              <div className="ir-card_inner">
                <div className="glowing-wrapper glowing-wrapper-active">
                  <div className="glowing-wrapper-animations">
                    <div className="glowing-wrapper-glow" />
                    <div className="glowing-wrapper-mask-wrapper">
                      <div className="glowing-wrapper-mask" />
                    </div>
                  </div>
                  <div className="glowing-wrapper-borders-masker">
                    <div className="glowing-wrapper-borders" />
                  </div>
                  <a
                    href="/contact"
                    className="glowing-wrapper-number w-inline-block"
                  >
                    <div className="number-text">4</div>
                  </a>
                </div>
                <div className="spacer-30" />
                <h2 className="heading-2-sm">Venture Building</h2>
                <p className="paragraph ir-paragraph">
                  If the project becomes so successful that it exceeds our
                  capacities, we will establish a specialized venture – focused,
                  quality-conscious, and without any compromise.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="isw-left">
          <div className="sphere-video-wrapper_02">
            <div
              data-poster-url="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e%2F6656cacd36520de6474029a1_SP_LOOP_1-poster-00001.jpg"
              data-video-urls="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e%2F6656cacd36520de6474029a1_SP_LOOP_1-transcode.mp4,https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e%2F6656cacd36520de6474029a1_SP_LOOP_1-transcode.webm"
              data-autoplay="true"
              data-loop="true"
              data-wf-ignore="true"
              className="sphere-video-02 w-background-video w-background-video-atom"
            >
              <video
                id="470d9317-8052-b071-4908-23434133d77f-video"
                autoPlay=""
                loop=""
                style={{
                  backgroundImage:
                    'url("https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e%2F6656cacd36520de6474029a1_SP_LOOP_1-poster-00001.jpg")'
                }}
                muted=""
                playsInline=""
                data-wf-ignore="true"
                data-object-fit="cover"
              >
                <source
                  src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e%2F6656cacd36520de6474029a1_SP_LOOP_1-transcode.mp4"
                  data-wf-ignore="true"
                />
                <source
                  src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e%2F6656cacd36520de6474029a1_SP_LOOP_1-transcode.webm"
                  data-wf-ignore="true"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    data-w-id="753488d6-ceab-91d6-9240-5ced24474518"
    className="section vr-section-big-2"
  >
    <div className="vr-glasses_wrapper-big hide-mobile">
      <div
        className="spline-02"
        data-w-id="753488d6-ceab-91d6-9240-5ced2447451a"
        data-animation-type="spline"
        data-spline-url="https://prod.spline.design/tAjk1txBV3g1z1E6/scene.splinecode"
      >
        <canvas />
      </div>
    </div>
    <div className="home-contact_absolute">
      <div
        id="marketing"
        data-w-id="8dc3c83c-e60d-5eb0-5f90-6bdb02a5a602"
        style={{ opacity: 0 }}
        className="hc-bottom-flex"
      >
        <div className="title-wrapper">
          <div className="title-mask-wrapper">
            <h2 className="heading-2">Let's Talk.</h2>
            <div
              data-poster-url="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/657074e31099d1b431e04767_bgv2_i360_720p-poster-00001.jpg"
              data-video-urls="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/657074e31099d1b431e04767_bgv2_i360_720p-transcode.mp4,https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/657074e31099d1b431e04767_bgv2_i360_720p-transcode.webm"
              data-autoplay="true"
              data-loop="true"
              data-wf-ignore="true"
              className="title-bg-video w-background-video w-background-video-atom"
            >
              <video
                id="8dc3c83c-e60d-5eb0-5f90-6bdb02a5a607-video"
                autoPlay=""
                loop=""
                style={{
                  backgroundImage:
                    'url("https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/657074e31099d1b431e04767_bgv2_i360_720p-poster-00001.jpg")'
                }}
                muted=""
                playsInline=""
                data-wf-ignore="true"
                data-object-fit="cover"
              >
                <source
                  src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/657074e31099d1b431e04767_bgv2_i360_720p-transcode.mp4"
                  data-wf-ignore="true"
                />
                <source
                  src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/657074e31099d1b431e04767_bgv2_i360_720p-transcode.webm"
                  data-wf-ignore="true"
                />
              </video>
            </div>
          </div>
        </div>
        <div className="hcb-details-flex">
          <div className="hcb-photo">
            <img
              src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/659172f33804e992272354a7_Mo.jpg"
              loading="lazy"
              sizes="120px"
              srcSet="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/659172f33804e992272354a7_Mo-p-500.jpg 500w, https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/659172f33804e992272354a7_Mo-p-800.jpg 800w, https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/659172f33804e992272354a7_Mo-p-1080.jpg 1080w, https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/659172f33804e992272354a7_Mo.jpg 1200w"
              alt=""
              className="image-3"
            />
          </div>
          <div className="ptm-cd">
            <div className="ptm-name">Andreas Mose</div>
            <div className="ptm-position">Director Value Creation</div>
          </div>
          <div className="ptm-cd">
            <a href="mailto:contact@inside360.studio" className="kontakt-link">
              contact[at]inside360.studio
            </a>
            <a href="tel:+498921537146" className="kontakt-link">
              +49 89 215 37 146
            </a>
          </div>
        </div>
        <div className="glowing-wrapper glowing-wrapper-active hc-details-block">
          <div className="glowing-wrapper-animations">
            <div className="glowing-wrapper-glow" />
            <div className="glowing-wrapper-mask-wrapper">
              <div className="glowing-wrapper-mask" />
            </div>
          </div>
          <div className="glowing-wrapper-borders-masker">
            <div className="glowing-wrapper-borders" />
          </div>
          <a href="/contact" className="glowing-wrapper-button w-inline-block">
            <div className="button-text">contact Us</div>
          </a>
          <div className="w-embed">
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n                            .live-logo {\n                                mix-blend-mode: plus-lighter !important\n                            }\n                        "
              }}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="vr-popup-overlay">
    <div className="vr-popup-close" />
    <div className="vr-popup">
      <h2 className="heading-2 heading-2-centered">VR&nbsp;in a Nutshell</h2>
      <div className="vr-popup-inner-wrapper">
        <div className="vr-popup-info-item_wrap">
          <div className="vr-popup-info-item">
            <div className="vr-popup-ii_grid-01">
              <div
                id="w-node-_39d5ed5d-4832-e7b8-48a9-b3738231ec63-8231ec5a"
                className="grid-cell"
              >
                <div className="vr-popup_ii-bg-block">
                  <img
                    src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/656b2f7be3a614f7fbfad910_image%2044.png"
                    loading="lazy"
                    alt=""
                  />
                </div>
              </div>
              <div
                id="w-node-_39d5ed5d-4832-e7b8-48a9-b3738231ec66-8231ec5a"
                className="grid-cell"
              >
                <h3 className="vr-popup-ii_title">
                  Was ist Extended Reality: VR, AR, MR?
                </h3>
                <p className="vr-popup-ii_paragraph">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="vr-popup-info-item_wrap">
          <div className="vr-popup-info-item">
            <div className="vr-popup-ii_grid-02">
              <div
                id="w-node-_39d5ed5d-4832-e7b8-48a9-b3738231ec6e-8231ec5a"
                className="grid-cell"
              >
                <h3 className="vr-popup-ii_title">
                  Was ist Virtual Reality und wie &nbsp;funktionierts?
                </h3>
                <p className="vr-popup-ii_paragraph">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </p>
              </div>
              <div
                id="w-node-_39d5ed5d-4832-e7b8-48a9-b3738231ec73-8231ec5a"
                className="grid-cell"
              >
                <div className="vr-popup_ii-bg-block">
                  <img
                    src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/656b2f7be3a614f7fbfad910_image%2044.png"
                    loading="lazy"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="vr-popup-info-item_wrap">
          <div className="vr-popup-info-item">
            <div className="vr-popup-ii_grid-01">
              <div
                id="w-node-_39d5ed5d-4832-e7b8-48a9-b3738231ec79-8231ec5a"
                className="grid-cell"
              >
                <div className="vr-popup_ii-bg-block">
                  <img
                    src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/656b2f7be3a614f7fbfad910_image%2044.png"
                    loading="lazy"
                    alt=""
                  />
                </div>
              </div>
              <div
                id="w-node-_39d5ed5d-4832-e7b8-48a9-b3738231ec7c-8231ec5a"
                className="grid-cell"
              >
                <h3 className="vr-popup-ii_title">Warum ist VR so effektiv?</h3>
                <p className="vr-popup-ii_paragraph">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="vr-popup-info-item_wrap">
          <div className="vr-popup-info-item">
            <div className="vr-popup-ii_grid-02">
              <div
                id="w-node-_39d5ed5d-4832-e7b8-48a9-b3738231ec84-8231ec5a"
                className="grid-cell"
              >
                <h3 className="vr-popup-ii_title">
                  Wie nutzen Unternehmen VR?
                </h3>
                <p className="vr-popup-ii_paragraph">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </p>
              </div>
              <div
                id="w-node-_39d5ed5d-4832-e7b8-48a9-b3738231ec89-8231ec5a"
                className="grid-cell"
              >
                <div className="vr-popup_ii-bg-block">
                  <img
                    src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/656b2f7be3a614f7fbfad910_image%2044.png"
                    loading="lazy"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="vr-popup-tm-block">
        <div className="ptm-photo">
          <div className="ptm-inner">
            <img
              src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/656b323dbb2ce035455e0ef3_ptm-photo.png"
              loading="lazy"
              alt=""
              className="ptm-image"
            />
          </div>
        </div>
        <div className="ptm-info">
          <div className="ptm-name">Andreas Mose</div>
          <div className="ptm-position">Director Value Creation</div>
        </div>
        <div className="ptm-ctas">
          <div className="glowing-wrapper glowing-wrapper-active">
            <div className="glowing-wrapper-animations">
              <div className="glowing-wrapper-glow" />
              <div className="glowing-wrapper-mask-wrapper">
                <div className="glowing-wrapper-mask" />
              </div>
            </div>
            <div className="glowing-wrapper-borders-masker">
              <div className="glowing-wrapper-borders" />
            </div>
            <a
              href="#"
              className="glowing-wrapper-button glowing-wrapper-button-flexh w-inline-block"
            >
              <div className="button-text">BOOK A DEMO</div>
              <div className="btn-anim-block">
                <img
                  src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/656877c29547ecd55a96e963_Ly5jeiRRS7%20Kopie%201.svg"
                  loading="lazy"
                  alt=""
                  className="temp-btn-img"
                />
              </div>
            </a>
          </div>
          <a href="#" className="button-regular w-button">
            Book a Speaker
          </a>
        </div>
      </div>
      <div className="carousel-wrapper">
        <div
          data-w-id="b8db07d4-94f7-3c91-837d-8e176724e689"
          className="trusted-title"
        >
          +350 Projects for companies like
        </div>
        <div className="trusted-carousel">
          <div className="trusted-carousel_inner">
            <div className="tc-slide">
              <img
                src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/6590263e3fcec21648c4de1e_logos-slide_01.svg"
                loading="lazy"
                alt=""
                className="tc-slide-image"
              />
            </div>
            <div className="tc-slide">
              <img
                src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/6590263e3fcec21648c4de1e_logos-slide_01.svg"
                loading="lazy"
                alt=""
                className="tc-slide-image"
              />
            </div>
          </div>
          <div className="trusted-carousel_inner-rev">
            <div className="tc-slide-rev">
              <img
                src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/65902640ba48a05dfdb45950_logos-slide_02.svg"
                loading="lazy"
                alt=""
                className="tc-slide-image"
              />
            </div>
            <div className="tc-slide-rev">
              <img
                src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/65902640ba48a05dfdb45950_logos-slide_02.svg"
                loading="lazy"
                alt=""
                className="tc-slide-image"
              />
            </div>
          </div>
          <div className="tc-left" />
          <div className="tc-right" />
        </div>
      </div>
    </div>
  </div>
  <div className="funnel-popup-overlay">
    <div className="funnel-popup-close" />
    <div className="funnel-popup">
      <h2 className="heading-2 heading-2-centered heading-2-lc">
        Book a Demo Call
      </h2>
      <div className="fp-calendly-wrapper" />
      <div className="carousel-wrapper">
        <div
          data-w-id="b8db07d4-94f7-3c91-837d-8e176724e689"
          className="trusted-title"
        >
          +350 Projects for companies like
        </div>
        <div className="trusted-carousel">
          <div className="trusted-carousel_inner">
            <div className="tc-slide">
              <img
                src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/6590263e3fcec21648c4de1e_logos-slide_01.svg"
                loading="lazy"
                alt=""
                className="tc-slide-image"
              />
            </div>
            <div className="tc-slide">
              <img
                src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/6590263e3fcec21648c4de1e_logos-slide_01.svg"
                loading="lazy"
                alt=""
                className="tc-slide-image"
              />
            </div>
          </div>
          <div className="trusted-carousel_inner-rev">
            <div className="tc-slide-rev">
              <img
                src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/65902640ba48a05dfdb45950_logos-slide_02.svg"
                loading="lazy"
                alt=""
                className="tc-slide-image"
              />
            </div>
            <div className="tc-slide-rev">
              <img
                src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/65902640ba48a05dfdb45950_logos-slide_02.svg"
                loading="lazy"
                alt=""
                className="tc-slide-image"
              />
            </div>
          </div>
          <div className="tc-left" />
          <div className="tc-right" />
        </div>
      </div>
    </div>
  </div>
  <div className="showreel-popup-overlay">
    <div className="showreel-popup-close" />
    <div className="showreel-popup">
      <div
        style={{ paddingTop: "56.27659574468085%" }}
        className="showreel-p-video w-video w-embed"
      >
        <iframe
          className="embedly-embed"
          src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F138706212%3Fapp_id%3D122963&dntp=1&display_name=Vimeo&url=https%3A%2F%2Fvimeo.com%2F138706212&image=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F534189231-f10caba825cc596bc160f5635bd3a060bbc413ec351b1b6d7faaaaa0629c77ac-d_1280&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=vimeo"
          width={940}
          height={529}
          scrolling="no"
          allowFullScreen=""
          title="Virtual Reality Jockey"
        />
      </div>
    </div>
  </div>
  <section className="footer">
    <div className="container">
      <div className="footer-wrapper">
        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/company/inside360-xr/"
            target="_blank"
            className="footer-social_link w-inline-block"
          >
            <img
              src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/656b0a5b3a3f6e1cc0b7e079_linkedin_w.svg"
              loading="lazy"
              alt=""
              className="footer-social_link-icon"
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UC3S7FOKg-XSS1IO7_lyvvkA"
            target="_blank"
            className="footer-social_link w-inline-block"
          >
            <img
              src="https://cdn.prod.website-files.com/65661ed49bc344ac62fb537e/66c4489bb7d3d92aa0c4a35f_youtube.svg"
              loading="lazy"
              alt=""
              className="footer-social_link-icon"
            />
          </a>
        </div>
        <div className="footer-legal">
          <a
            href="https://www.inside360-group.com/career"
            target="_blank"
            className="footer-legal_link"
          >
            Career
          </a>
          <a href="/imprint" className="footer-legal_link">
            Imprint
          </a>
          <a href="/privacy-policy" className="footer-legal_link">
            Privacy Policy
          </a>
          <a href="/terms" className="footer-legal_link">
            Terms
          </a>
        </div>
      </div>
    </div>
  </section>
</div>
    );
}
export default Home;