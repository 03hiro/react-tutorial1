export const Image =(props) => {
    const { src } = props;
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src={src} alt="cute dog!" />
          </figure>
        </div>
      </div>
    );
}


