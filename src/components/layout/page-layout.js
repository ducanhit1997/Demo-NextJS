/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { Container } from "reactstrap";
export const PageContext = createContext({});
export const usePageContext = () => useContext(PageContext);

export const PageLayout = ({ context, children, ...props }) => {
  return (
    <PageContext.Provider value={context}>
      <Container {...props} className="pt-2">
        {children}
      </Container>
    </PageContext.Provider>
  );
};
PageLayout.defaultProps = {
  context: {},
};
