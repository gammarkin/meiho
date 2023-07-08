interface ITextFolder {
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
    border: string;
    verticalAlign: string;
    padding: string;
  };
  mjText: {
    align: string;
    fontSize: string;
    lineHeight: string;
    textTransform: string;
    fontFamily: string;
    mjClass: string;
    padding: string;
    content: {
      style: string;
      text: string;
    }[];
  };
}
export default ITextFolder;