interface IHeader {
  mjSection: {
    backgroundColor: string;
    color: string;
    borderColor: string;
    fontSize: string;
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
  };
  description: string,
  template: string,
  style: string
}

export default IHeader;