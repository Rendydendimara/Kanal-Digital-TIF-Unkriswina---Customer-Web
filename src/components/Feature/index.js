export default function SingleFeature(props) {
  const { featureClass, Icon, Title, Description } = props;
  return (
    <div
      className={featureClass ? featureClass : 'it-feature-item text-center'}
    >
      <div className="it-feature-item-content z-index">
        <div className="it-feature-icon">
          <span>
            <i className={Icon ? Icon : 'flaticon-class'}></i>
          </span>
        </div>
        <div className="it-feature-text pt-30">
          <h4 className="it-feature-title">
            {Title ? Title : 'Education Services'}
          </h4>
          <p>
            {Description
              ? Description
              : 'Lorem ipsum dolor amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore'}
          </p>
        </div>
      </div>
    </div>
  );
}
