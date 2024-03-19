const SidebarFooter = () => {
  const socialContent = [
    { id: 1, icon: "fa-facebook-f", link: "https://www.facebook.com/" },
    { id: 2, icon: "fa-twitter", link: "https://www.twitter.com/" },
    { id: 3, icon: "fa-instagram", link: "https://www.instagram.com/" },
    { id: 4, icon: "fa-linkedin-in", link: "https://www.linkedin.com/" },
  ];

  return (
    <div className=" mt-3  mb-3 jobDetailsBtn ">
      <button className="theme-btn btn-style-one mm-listitem__text">
        Accept
      </button>

      <button className="theme-btn btn-style-three call-modal">
        Decline
      </button>

    </div>
  );
};

export default SidebarFooter;
