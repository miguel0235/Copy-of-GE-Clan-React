import React from 'react'

import { Helmet } from 'react-helmet'

import AppComponent from '../components/component'
import PlaceCard from '../components/place-card'
import './landing-page.css'

const LandingPage = (props) => {
  return (
    <div className="landing-page-container">
      <Helmet>
        <title>GE Clan</title>
        <meta property="og:title" content="GE Clan" />
      </Helmet>
      <div className="landing-page-top-container">
        <div className="landing-page-hero">
          <img
            alt="image"
            src="/playground_assets/logo-maker-for-a-handmade-clothing-brand-with-a-modern-typeface-3149a-500w.png"
            className="landing-page-image"
          />
        </div>
      </div>
      <div id="main-section" className="landing-page-main">
        <div className="landing-page-banner">
          <div className="landing-page-container1">
            <h1 className="landing-page-text">
              <span>GE Discord Server</span>
            </h1>
            <span className="landing-page-text2">
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                A clan is a group of gamers who play as a group in multiplayer
                online games. The clan can be official and enabled through a
                function in a game&apos;s mechanics, or it may be an unofficial
                clan by mutual agreement. Clans may have entrance requirements
                that a player must meet, such as a certain level of prowess or
                the completion of tasks as part of an application process. In
                massively multiplayer online role playing games (MMORPGs) clans
                are referred to as guilds, but the concept is the same.
              </span>
            </span>
            <div className="landing-page-container2"></div>
          </div>
          <AppComponent></AppComponent>
          <iframe
            src='https://discord.com/widget?id=282981191437516800&amp;theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"'
            className="landing-page-iframe"
          ></iframe>
        </div>
        <h1>The Boys</h1>
        <div className="landing-page-cards-container">
          <PlaceCard
            city="Miggy"
            image="https://filedn.com/ly4QocVNJ41QQPdqDs8BDc5/DiscordBotPictures/4cc6f73493bb3367669ea11eb35857c2.png"
            description="Owner"
          ></PlaceCard>
          <PlaceCard
            city="Nsake02"
            image="https://filedn.com/ly4QocVNJ41QQPdqDs8BDc5/DiscordBotPictures/e6701f3703aa800a0c3edd53960860e5.png"
            description="Co-Owner"
          ></PlaceCard>
          <PlaceCard
            city="Klotzy"
            image="https://filedn.com/ly4QocVNJ41QQPdqDs8BDc5/DiscordBotPictures/9340f12a659f0ad2189f9d5e9c9bd5a8.png"
            description="Owner of 3hill Clan"
          ></PlaceCard>
          <PlaceCard
            city="Psyer"
            image="https://filedn.com/ly4QocVNJ41QQPdqDs8BDc5/DiscordBotPictures/7aa8bc25cc9396d966f969f40282f831.png"
            description="Overwatch god"
          ></PlaceCard>
          <PlaceCard
            city="Nick"
            image="https://filedn.com/ly4QocVNJ41QQPdqDs8BDc5/DiscordBotPictures/33af2eaff2ac4a08c2aedb3a0bec3c5b.png"
            description="Big Bill"
          ></PlaceCard>
          <PlaceCard
            city="Nick"
            image="https://filedn.com/ly4QocVNJ41QQPdqDs8BDc5/DiscordBotPictures/66f806b57b08fa48e1fcdb95a9a3156c.png"
            description="PS4 Player"
          ></PlaceCard>
        </div>
      </div>
      <div className="landing-page-footer">
        <div className="landing-page-menu">
          <h1>GE Clan</h1>
          <div className="landing-page-follow-container">
            <span className="landing-page-text8">
              Follow us on
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <div className="landing-page-icons-container">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="landing-page-icon"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link1"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="landing-page-icon2"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link2"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="landing-page-icon4"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
