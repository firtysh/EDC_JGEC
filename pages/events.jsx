import { Typography, Box } from "@mui/material";
import { colors } from "../styles/colors";
import styled from "styled-components";
import "animate.css";
import Layout from "../components/Layout";
import { useEffect } from "react";
export default function Events() {
  useEffect(() => {
    document.title = "CONTACT | EDC";
  }, []);
  return (
    <Box>
      <Typography
        sx={{
          fontSize: { xs: "30px", md: "3vw", fontWeight: "bold" },
          fontWeight: "bold",
          textShadow: "2px 2px maroon",
          width: "fit-content",
          color: colors.white,
          borderRadius: "10px",
          padding: "0 5%",
          ":first-letter": {
            color: colors.warning,
            fontSize: { xs: "40px", md: "4vw", fontWeight: "bold" },
          },
          "&::after": {
            content: '""',
            display: "block",
            width: "50%",
            marginTop: -1,
            marginBottom: 4,
            borderTop: `5px solid ${colors.warning}`,
          },
        }}
        className="animate__animated animate__fadeInLeft"
      >
        Events
      </Typography>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          backgroundColor: colors.secondary,
          backgroundImage: `url("/assets/backgrounds/blob-scatter-haikei.svg")`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <Layout>
          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Card>
              <CardText>
                <Typography variant="h4" component={"h4"} fontWeight="bold">
                  TEDx JGEC
                </Typography>
                <Typography variant="p" component={"p"} fontWeight="bold">
                  In the spirit of ideas worth spreading, TED has created a program 
                  called TEDx. TEDx is a program of local, self-organized events that
                  bring people together to share a TED-like experience. Our event is 
                  called TEDxJGEC, where x = independently organized TED event. On 
                  11th February 2019, EDC JGEC organised it's first TEDx in the college 
                  campus.The last TEDx event was organised on 11th December 2022. It was
                  organised by Shaikh Hamza of 2023 batch from Mechanical Engineering
                  Department. The event was conducted very easily which has been 
                  possible because of the amazing management. Some of the speakers
                  who shared their experiences in our TEDx event are - Ashish Vidyarthi,
                  Sagar Dodeja, Himeesh Madaan, Raj Vikramaditya (Striver) and many more.
                  After attending the TEDx event the attendees got an incredibly inspiring 
                  and engaging experience. Our EDC cell will definitely organise more such 
                  TEDx events and we would invite more speakers to share their valuable 
                  experiences with the attendees and we would try to expand the event so 
                  that more and more number of people can attend the event.
                </Typography>
              </CardText>
              <CardImg>
                <img src="/assets/placeholders/tedx3.jpg" alt="TEDx" />
              </CardImg>
            </Card>
            <Card>
              <CardText>
                <Typography variant="h4" component={"h4"} fontWeight="bold">
                  The Bizz Quiz
                </Typography>
                <Typography variant="p" component={"p"} fontWeight="bold">
                The Entrepreneurship and Development Cell (EDC) of Jalpaiguri 
                Government Engineering College has organized a business quiz 
                named Bizz quiz on 12 July, 2023. In this event the participated
                teams had to answer some brain storming questions related to business
                and some business history in first stage of preliminary round. In 
                the second stage of preliminary round the teams had to make a logo for 
                their business and make a B-plan for the same. Selected teams qualified 
                to the final round. It had been an amazing event by EDC and we will plan 
                more such events in future.
                </Typography>
              </CardText>
              <CardImg>
                <img src="/assets/placeholders/bizz_quiz.jpeg" alt="TEDx" />
              </CardImg>
            </Card>
            <Card>
              <CardText>
                <Typography variant="h4" component={"h4"} fontWeight="bold">
                  The B-Plan Workshop
                </Typography>
                <Typography variant="p" component={"p"} fontWeight="bold">
                The Entrepreneurship and Development cell (EDC) of Jalpaiguri 
                Government Engineering College conducted a workshop on business 
                plan on 22 August 2023 in our college. It was organized by 4th 
                year students. The workshop served as a beacon of opportunity for 
                aspiring entrepreneurs, equipping them with the essential skills 
                and perspectives required to craft well-rounded business plans. 
                Through a comprehensive curriculum that encompassed market analysis, 
                financial projections, strategic marketing and more, attendees were 
                immersed in the intricacies of transforming innovative ideas into 
                viable ventures. It had been an amazing workshop by our EDC cell 
                and we will plan more such workshop in future.
                </Typography>
              </CardText>
              <CardImg>
                <img src="/assets/placeholders/bplan.jpg" alt="TEDx" />
              </CardImg>
            </Card>
            <Card>
              <CardText>
                <Typography variant="h4" component={"h4"} fontWeight="bold">
                The Stock Trading Workshop
                </Typography>
                <Typography variant="p" component={"p"} fontWeight="bold">
                The Entrepreneurship and Development Cell (EDC) of Jalpaiguri 
                Government Engineering College has conducted a workshop related 
                to basics of stock market on 8th May, 2023 in our college. In this 
                workshop they introduced the attendees with the basic terms of the 
                stock market like what is dividend, holding, intraday, debt to 
                equity ratio and many more. Pritam Sardar of 4th year Mechanical 
                Engineering Department introduced the topics to the attendees. The 
                event was conducted very smoothly which has been possible because 
                of the amazing management. After the session the attendees were able 
                to analyse a stock upto some extent with the basic understanding of 
                the terms. Our EDC cell is planning to launch more such events in 
                future for creating a awareness of stock market so that more and more 
                people invest in our market which will result in upliftment of our economy.
                </Typography>
              </CardText>
              <CardImg>
                <img src="/assets/placeholders/stock.jpeg" alt="TEDx" />
              </CardImg>
            </Card>
          </Box>
        </Layout>
      </Box>
    </Box>
  );
}

const Card = styled.div`
  width: 85%;
  ${'' /* minwidth: 500px; */}
  display: flex;
  background-color: #fff;
  flex-direction: row;
  color: #000;
  margin: 20px 0;
  padding: 20px;
  height: 400px;
  box-shadow: rgb(1, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 0, 0, 0.5) -3px -3px 6px 1px inset;
  /*glassmorphism*/
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background-color: rgba(17, 25, 40, 0.2);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);

  h4 {
    color: ${colors.danger};
  }
  p {
    color: ${colors.grey};
  }
  :nth-of-type(even) {
    flex-direction: row-reverse;
  }
  @media (max-width: 1300px) {
    width: 80%;
    flex-direction: column-reverse;
    height: auto;
    minwidth: 300px;
    :nth-of-type(even) {
      flex-direction: column-reverse;
    }
  }
`;
const CardText = styled.div`
  flex: 0.6;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin: 10px 0;
`;
const CardImg = styled.div`
  flex: 0.4;
  height: 100%;
  img {
    height: 100%;
    width: 100%;
    padding: 20px;
    ${'' /* aspect-ratio: 1/1; */}
    transition: all 0.5s ease-in-out;
    :hover {
      transform: scale(1.1);
    }
  }
`;
