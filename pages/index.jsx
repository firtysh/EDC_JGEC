import { Box, Button, IconButton, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import "animate.css";
import { colors } from "../styles/colors";
import styled from "styled-components";
import Layout from "../components/Layout";
import Link from "next/link";
import { KeyboardDoubleArrowRight, Scale } from "@mui/icons-material";
export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.title = "HOME | EDC";
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <Layout>
      <>
        <Box
          sx={{
            minHeight: { xs: "calc(100vh - 86px)", md: "calc(100vh - 76px)" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div className="animate__animated animate__fadeIn">
            <Typography
              sx={{
                fontSize: "6vw",
                textShadow: "6px 2px maroon",
                color: colors.white,
              }}
              variant={"h2"}
              className="cloister"
            >
              Entreprenuership Development Cell
            </Typography>
          </div>
          <div className="animate__animated animate__fadeIn">
            <Typography
              sx={{
                fontSize: "4vw",
                textShadow: "2px 2px maroon",
                color: "#ffffffdd",
              }}
              variant={"h2"}
              className="cloister"
            >
              Jalpaiguri Government Engineering College
            </Typography>
          </div>
          <div className="animate__animated animate__fadeIn" style={{display:'flex',flexDirection:'column',alignItems:"center",marginTop:"4rem",marginBottom:'4rem',gap:"1rem"}}>
            <Typography
              sx={{
                fontSize: "3vw",
                color: "rgb(255 216 102 / 87%)",
              }}
              variant={"h2"}
              className="cloister"
            >
              Join us on an exciting journey !
            </Typography>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd36tJF27xPuOlexMaH9ScJKebPhhyGGJ7e9M_MSS8U2dpOfw/viewform?usp=sf_link"
              style={{ color: "#9f0037",background:'#fff',borderRadius:'8px',textDecoration:'none',padding:'5px',textAlign:'center',width:'100px' }}
            >
              Join Now
            </a>
          </div>
        </Box>
        <Box
          style={{
            minHeight: "100vh",
            width: "100vw",
            backgroundColor: "white",
            backgroundImage: `url("/assets/backgrounds/corporate.jpg")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <StyledPaper>
            <StyledBox data-aos="fade-in">
              <Typography
                variant="h3"
                sx={{ fontSize: { xs: "30px", md: "3vw", fontWeight: "bold" } }}
                gutterBottom
                color={colors.primary}
              >
                What is EDC ?
              </Typography>
              <RowCard>
                <Img src="/assets/placeholders/compass.jpg" />
                <Typography
                  variant="p"
                  component={"p"}
                  color={colors.secondary}
                  align="justify"
                  sx={{
                    margin: "auto 0",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  Right from infusing the spirit of entrepreneurship, to
                  providing an excellent mentorship throughout the journey, EDC
                  JGEC believes, that every blooming entrepreneural idea will
                  blossom into a success story. We have an unrivalled capacity
                  to incubate innovations and foster real world solutions. We
                  aim to carry this forward and contribute substantially to the
                  entrepreneurial growth in North Bengal.
                </Typography>
              </RowCard>
            </StyledBox>
            <StyledBox data-aos="fade-in">
              <Typography
                variant="h3"
                sx={{ fontSize: { xs: "30px", md: "3vw", fontWeight: "bold" } }}
                align="right"
                color={colors.primary}
                gutterBottom
              >
                Why is EDC important?
              </Typography>
              <RowRevCard>
                <Img src="/assets/placeholders/sticky_notes.jpg" />
                <Typography
                  variant="p"
                  component="p"
                  color={colors.secondary}
                  sx={{
                    margin: "auto 0",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  Creativity, professionalism, risk-taking, passion, social
                  skills are some of the characteristics that define an
                  entrepreneur. EDC JGEC is about this and much more. We not
                  only provide a platform but create a perfect environment to
                  hone and sharpen the entrepreneurial genes in every aspiring
                  heart. We aim to create history of developing entrepreneurial
                  minds of the highest caliber.
                </Typography>
              </RowRevCard>
            </StyledBox>
            <StyledBox data-aos="fade-in">
              <Typography
                variant="h3"
                sx={{ fontSize: { xs: "30px", md: "3vw", fontWeight: "bold" } }}
                align="left"
                color={colors.primary}
                gutterBottom
              >
                How It All Started
              </Typography>
              <RowCard>
                <Img src="/assets/placeholders/sticky_notes.jpg" />
                <Typography
                  variant="p"
                  component="p"
                  color={colors.secondary}
                  sx={{
                    margin: "auto 0",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  It all started way back in 2019 when the idea of JOB CREATORS
                  instead of JOB SEEKERS sinked into our minds . We explored,
                  grew up from a small community of 10 members to a large
                  community of 300+ members. We have a dedicated core team
                  working behind us everyday aiding in the flourishing of the
                  community as well also helps us to focus to our objective. In
                  a word we say &ldquo;No what ifs . Let&apos;s make it
                  happen.&rdquo;
                </Typography>
              </RowCard>
            </StyledBox>
          </StyledPaper>
        </Box>
        <Box
          style={{
            minHeight: "50vh",
            width: "100vw",
            padding: "40px",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "30px", md: "3vw", fontWeight: "bold" },
              fontWeight: "bold",
              textShadow: "2px 2px maroon",
              width: "fit-content",
              borderRadius: "10px",
              padding: "10px",
              color: colors.white,
              ":first-letter": {
                color: colors.warning,
                fontSize: { xs: "40px", md: "4vw", fontWeight: "bold" },
              },
            }}
          >
            EVENTS
            <Link href="/events">
              <IconButton
                size="large"
                sx={{
                  ml: "20px",
                  mt: "-10px",
                  color: colors.white,
                  borderRadius: "10px",
                  ":hover": {
                    transform: "scale(1.1)",
                    transition: "all 1s",
                  },
                }}
              >
                <KeyboardDoubleArrowRight fontSize="large" />
              </IconButton>
            </Link>
          </Typography>
          <EventWrapper>
            <EventCard>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <EventImage
                    src="/assets/placeholders/tedx3.jpg"
                    alt="tedx"
                  />
                </div>
                <div className="flip-card-back">
                  <Typography
                    component="p"
                    variant="p"
                    sx={{
                      fontSize: "20px",
                      padding: "20px",
                    }}
                  >
                    On 11th December 2022, Entrepreneurship Development Cell,
                    JGEC organized its second TEDx in the college campus.
                  </Typography>
                </div>
              </div>
            </EventCard>
            <EventCard>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <EventImage src="/assets/placeholders/bizz_quiz.jpeg" alt="bizz_quiz" />
                </div>
                <div className="flip-card-back">
                  <Typography
                    component="p"
                    variant="p"
                    sx={{
                      fontSize: "20px",
                      padding: "20px",
                    }}
                  >
                    The Bizz Quiz, is an event to test the business knowledge of
                    participants.
                  </Typography>
                </div>
              </div>
            </EventCard>
            <EventCard>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <EventImage src="/assets/placeholders/bplan2023.jpeg" alt="bplan2023" />
                </div>
                <div className="flip-card-back">
                  <Typography
                    component="p"
                    variant="p"
                    sx={{
                      fontSize: "20px",
                      padding: "20px",
                    }}
                  >
                    The Entrepreneurship and Development cell (EDC) of Jalpaiguri 
                    Government Engineering College conducted a workshop on business 
                    plan on 22 August 2023 in our college.
                  </Typography>
                </div>
              </div>
            </EventCard>
          </EventWrapper>
        </Box>
      </>
    </Layout>
  );
}
const RowCard = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  minwidth: 360px;
  @media (max-width: 1200px) {
    flex-direction: column;
    Img{
      margin: 20px 0;
      width: 100%;
    }
    p{
      text-align: left;
      line-height: 1.1;
    }
`;
const RowRevCard = styled(RowCard)`
  flex-direction: row-reverse;
  @media (max-width: 1200px) {
    flex-direction: column;
    Img{
      margin: 20px 0;
      width: 100%;
    }
`;
const StyledPaper = styled(Paper)`
  width: 100vw;
  padding: 20px 30px;
  min-height: 96vh;
  margin: auto;
  border-radius: 0;
  background-color: #f5f5f5bb;
`;
const StyledBox = styled(Box)`
  margin: 25px auto;
`;
const EventWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const EventCard = styled.div`
  width: 360px;
  height: 400px;
  margin: 10px;
  border-radius: 10px;
  border: 5px solid white;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .flip-card-back {
    color: white;
    background-color: #00000040;
    z-index: -1;
  }
  &:hover .flip-card-back {
    z-index: 1;
    transition: z-index 0.5s;
  }
  &:hover .flip-card-front {
    opacity: 0.3;
    transform: scale(1.1);
    transition: all 0.5s;
    overflow: hidden;
  }
  @media (max-width: 475px) {
    zoom: 0.7;
  }
`;
const EventImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const Img = styled.img`
  object-fit: cover;
  height: 30vh;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  margin: auto 30px;
  width: 40vh;
`;
