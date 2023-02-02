import "./bannerScss.scss";

function bannerBlock(props) {
  var { data = {} } = props;
  return (
    <>
      <div className="banner">
        <img src={data.img1} alt="" />
        <div className="title">{data.title}</div>
        <div className="paraa">{data.subtitle}</div>
        <div className="pageshape"></div>
      </div>
    </>
  );
}

export default bannerBlock;
