import "./Section.css";
function Section() {
  return (
    <div id="intro-example" class="p-5 text-center bg-image">
      <div class="mask">
        <div class="d-flex justify-content-center align-items-center">
          <div class="text-white">
            <marquee class="fs-1">Welcome to my website...</marquee>
            <a
              data-mdb-ripple-init
              class="btn btn-outline-light m-2 fs-1"
              href="https://www.youtube.com/watch?v=c9B4TPnak1A"
              role="button"
              rel="nofollow"
              target="_blank"
            >
              Visit us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Section;
