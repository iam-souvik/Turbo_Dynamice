import { AspectRatio, Container, Heading } from "@chakra-ui/react";

export default function Laptop({ lecture }) {
  //   const { query } = useRouter();
  console.log(lecture.class);

  return (
    <div
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/background/20210709/original/pngtree-green-education-blackboard-stereoscopic-picture-image_934799.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        marginBottom: "5rem",
      }}
    >
      <Heading
        color={"black"}
        textAlign="center"
        marginTop={"5rem"}
        marginBottom="3rem"
      >
        Lecture Information
      </Heading>
      <Container
        h={"20rem"}
        fontSize="1.5rem"
        lineHeight={"4rem"}
        boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
        color={"teal"}
        bg="white"
      >
        <h4>
          <span style={{ fontWeight: "bold" }}>Class :</span> {lecture[0].class}
        </h4>
        <h4>
          <span style={{ fontWeight: "bold" }}>Title :</span> {lecture[0].title}
        </h4>
        <h4>
          <span style={{ fontWeight: "bold" }}>Subject :</span>{" "}
          {lecture[0].subject}
        </h4>
        <h4>
          <span style={{ fontWeight: "bold" }}>Time :</span> {lecture[0].time}
        </h4>
        <h4>
          <span style={{ fontWeight: "bold" }}>Date :</span> {lecture[0].date}
        </h4>
      </Container>
      <Container maxW={"812px"} display="flex" alignItems="center" p={"2rem"}>
        <AspectRatio w="812px" ratio={2} h="400px" marginTop={"2rem"}>
          <iframe
            title="naruto"
            src="https://www.youtube.com/embed/dwCVGG63UoY"
            allowFullScreen
          />
        </AspectRatio>
      </Container>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  console.log(id, "lecture id");
  const res = await fetch(`http://localhost:3000/api/lecture/${id}`).then((x) =>
    x.json()
  );

  return {
    props: {
      lecture: res,
    },
  };
};
