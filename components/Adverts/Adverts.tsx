interface AdvertsProps {
  adverts: FindJobsResponse["paginatedJobs"]["result"];
  isLoading: boolean;
}

const Adverts = ({ adverts, isLoading = true }: AdvertsProps) => {
  return <div id="Adverts"></div>;
};

export default Adverts;
