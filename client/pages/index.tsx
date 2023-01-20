import { useState } from "react";
import Head from "next/head";
import { gql, useQuery } from "@apollo/client";
import { Container, Row, Col, Card, Spinner, Button } from "react-bootstrap";
import YouTube from "react-youtube";
import "bootstrap/dist/css/bootstrap.min.css";
import withApollo from "../lib/withApollo";
import AddVideoModal from "@/components/add-video-modal";
import Loader from "@/components/loader";
import styles from "@/styles/Home.module.css";

export const GET_VIDEOS = gql`
  query {
    videos {
      _id
      url
      title
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_VIDEOS);
  const [show, setShow] = useState(false);
  if (loading) {
    return <Loader />;
  }

  if (error) return <p>`Error! ${error.message}`</p>;
  const { videos } = data;

  return (
    <>
      <Head>
        <title>Fanfare Demonstration</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mt-2">
        <Container fluid>
          <h2 className="text-light mb-4 text-center">FANFARE DEMONSTRATION</h2>
          <div className="d-grid col-4 gap-2 mx-auto">
            <Button
              variant="primary"
              size="lg"
              className="mb-4 rounded-1"
              onClick={() => setShow(true)}
            >
              Add
            </Button>
          </div>
          <Row>
            {videos.map((video: any) => {
              return (
                <Col md={4} key={video?._id}>
                  <Card className={`mb-4 ${styles.cardDark}`}>
                    <Card.Body>
                      <Card.Title>{video?.title}</Card.Title>
                      <div className={styles.videoWrapper}>
                        <YouTube
                          videoId={video?.url.replace("https://youtu.be/", "")}
                          id={video?._id}
                          title={video?.title}
                        />
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </main>
      <AddVideoModal showModal={show} setShowModal={setShow} />
    </>
  );
};

export default withApollo(Home);
