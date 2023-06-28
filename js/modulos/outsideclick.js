export default function outsideClick(elements, events, callback) {
  const html = document.querySelector("html");

  function handleOutsideClick(event) {
    const isOutside = !elements.some((element) =>
      element.contains(event.target)
    );

    if (isOutside) {
      callback();
      events.forEach((event) => {
        html.removeEventListener(event, handleOutsideClick);
      });
    }
  }

  events.forEach((event) => {
    setTimeout(() => {
      html.addEventListener(event, handleOutsideClick);
    }, 0);
  });
}
