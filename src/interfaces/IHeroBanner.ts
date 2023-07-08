interface MjmlModel {
  mjSection: {
    backgroundRepeat: string;
    backgroundSize: string;
    backgroundPosition: string;
    border: string;
    direction: string;
    textAlign: string;
    padding: string;
  };
  mjColumn: {
    verticalAlign: string;
    textAlign: string;
    padding: string;
  };
  mjImage: {
    src: string;
    alt: string;
    href: string;
    width: string;
    height: string;
    align: string;
    padding: string;
  };
  style: string
}

export default MjmlModel;