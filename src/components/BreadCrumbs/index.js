import Link from 'next/link';

export default function BreadCrumbs(props) {
  const { Img, Title, subTitle } = props;

  const breadCrumbsStyle = {
    backgroundImage: `url(${Img ? Img : '/img/breadcrumb/breadcrumb.jpg'})`,
  };

  return (
    <div
      className="it-breadcrumb-area it-breadcrumb-bg"
      style={breadCrumbsStyle}
    >
      <div className="container">
        <div className="row ">
          <div className="col-md-12">
            <div className="it-breadcrumb-content z-index-3 text-center">
              <div className="it-breadcrumb-title-box">
                <h3 className="it-breadcrumb-title">
                  {Title ? Title : 'About Us'}
                </h3>
              </div>
              <div className="it-breadcrumb-list-wrap">
                <div className="it-breadcrumb-list">
                  <span>
                    <Link href="/">home</Link>
                  </span>
                  <span className="dvdr">//</span>
                  <span>{subTitle ? subTitle : 'about us'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
