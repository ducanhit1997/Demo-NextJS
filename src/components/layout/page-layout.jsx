import { createContext, useContext, useEffect } from "react";
import { Container } from "reactstrap";
export const PageCtx = createContext({});
export const usePageContext = () => useContext(PageCtx);

export const PageLayout = ({
  ctx,
  title,
  subTitle,
  titleValue,
  children,
  ...props
}) => {
  return (
    <PageCtx.Provider value={ctx}>
      <Container {...props} className="pt-2">
        {title && <h3>{title}</h3>}
        {subTitle && <h6>{subTitle}</h6>}
        {children}
      </Container>
    </PageCtx.Provider>
  );
};
PageLayout.defaultProps = {
  secure: false,
  title: null,
  titleValue: null,
  className: null,
  ctx: {},
  allowRoles: [],
  subTitle: null,
};
