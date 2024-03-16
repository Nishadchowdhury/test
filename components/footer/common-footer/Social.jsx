const Social = () => {
  const socialContent = [
    { id: 1, icon: "fa-github", link: "#" },
    { id: 2, icon: "fa-youtube", link: "https://www.youtube.com/@RemoteCoded" },
    { id: 3, icon: "fa-linkedin-in", link: "https://www.linkedin.com/company/remotecoded" },
    { id: 4, icon: "fa-twitter", link: "#" },
    { id: 5, icon: "fa-facebook-f", link: "#" },
  ];
  return (
    <>
      {socialContent.map((item) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={item.id}
        >
          <i className={`fab ${item.icon}`}></i>
        </a>
      ))}
      <a
        href="mailto:hello@remotecoded.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fas fa-envelope"></i>
      </a>
    </>
  );
};

export default Social;
