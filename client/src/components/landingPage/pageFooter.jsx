import React from "react";
import "../../assets/styles/landingPage/footer.scss";
import { footerItems } from "../../descriptors/footerItems";



const footerContent = footerItems.map((item, key) => {
  const {title, children} = item;
  const footerLink = children.sort().map((child, index) => {
    return (
     key < footerItems.length - 1 ? key == 0 ?
      <li key={index}><a href={`/services/?title=${child.split(" ")[0].toLowerCase()}`}>{child}</a></li>
      :
      <li key={index}><a href='#'>{child}</a></li>
      : <li key={index}>{child}</li>
    );
  });
  return (
    <div key={key}>
      <h5 className="text-light">{title}</h5>
      <ul className="list-unstyled">{footerLink}</ul>
    </div>
  )
})


export default function PageFooter() {
  return (
    <footer>
      <div className="footer-content">
        {
          footerContent
        }
      </div>
    </footer>
  );
}