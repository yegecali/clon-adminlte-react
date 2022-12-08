type Props = {
  children?: JSX.Element;
};
const DashboardTemplate: React.FC<Props> = ({ children }) => {
  return <div> header {children} footer </div>;
};
export default DashboardTemplate;
