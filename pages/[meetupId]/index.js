import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://www.tourmyindia.com/blog//wp-content/uploads/2020/11/Feature-Akshardham-Temple.jpg"
      title="First Meetup"
      description="A First Meetup"
      address="Some address"
    />
  );
};

export const getStaticPaths = async () => {
  return {
    fallback: true,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
      {
        params: {
          meetupId: "m3",
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.meetupId;
  return {
    props: {
      meetupData: {
        image:
          "https://www.tourmyindia.com/blog//wp-content/uploads/2020/11/Feature-Akshardham-Temple.jpg",
        id: id,
        title: "First Meetup",
        description: "A First Meetup",
        address: "Some address",
      },
    },
  };
};

export default MeetupDetails;
