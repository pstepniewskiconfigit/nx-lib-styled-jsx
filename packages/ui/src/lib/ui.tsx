/* eslint-disable-next-line */
export interface UiProps {}

export function Ui(props: UiProps) {
  return (
    <>
      <div className="root">
        <h1>Welcome to Ui!</h1>
      </div>
      <style jsx>{`
        .root {
          color: pink;
        }
      `}</style>
    </>
  );
}

export default Ui;
