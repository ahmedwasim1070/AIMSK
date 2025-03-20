const SocialNav = () => {
  const socialLinks = [
    {
      Icon: FacebookIcon,
      color: "#1877F2",
      noColor: "",
      link: "https://www.facebook.com/aimskabirwala/about",
    },
    {
      Icon: WhatsAppIcon,
      color: "#25D366",
      noColor: "",
      link: "https://wa.me/923009279148",
    },
    { Icon: EmailIcon, color: "#FF0000", noColor: "", link: "mailto:aimskabirwala50@gmail.com" },
    {
      Icon: CallIcon,
      color: "#187772",
      noColor: "",
      link: "tel+923009279148",
    },
  ];

  return (
    <nav>
      <ul className="flex flex-row sm:gap-x-10 xxs:gap-x-4 my-5">
        {socialLinks.map(({ Icon, color, noColor, link }, index) => (
          <li
            key={index}
            className={`border xl:p-4 xxs:p-3 flex items-center justify-center rounded-full group duration-300 hover:border-primaryColor `}
            style={{ backgroundColor: noColor }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = color)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = noColor)
            }
          >
            <a href={link}>
              <Icon className="w-6 fill-white group-hover:fill-black" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// Icons
const FacebookIcon = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 0 20 20" {...props}>
      <title>{"facebook [#176]"}</title>
      <path
        fillRule="evenodd"
        d="M6.821 20v-9h2.733L10 7H6.821V5.052C6.821 4.022 6.848 3 8.287 3h1.458V.14c0-.043-1.253-.14-2.52-.14C4.58 0 2.924 1.657 2.924 4.7V7H0v4h2.923v9h3.898Z"
      />
    </svg>
  );
};

const WhatsAppIcon = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
      <title>{"whatsapp [#128]"}</title>
      <path
        fillRule="evenodd"
        d="M15.821 14.121c-.241.682-1.199 1.247-1.963 1.412-.523.11-1.205.199-3.503-.754C7.774 13.71 4.19 9.901 4.19 7.366c0-1.29.744-2.793 2.045-2.793.626 0 .764.012.97.507.241.582.829 2.016.899 2.163.289.603-.294.956-.717 1.482-.135.158-.288.329-.117.623.17.288.758 1.246 1.622 2.015 1.116.995 2.021 1.312 2.345 1.447.241.1.529.077.705-.111.223-.241.5-.641.782-1.036.199-.282.452-.317.717-.217.179.062 2.454 1.119 2.55 1.288.071.123.071.705-.17 1.387M10.002 0h-.005C4.484 0 0 4.485 0 10c0 2.187.705 4.215 1.904 5.86L.658 19.578l3.843-1.228A9.923 9.923 0 0 0 10.002 20C15.515 20 20 15.515 20 10S15.515 0 10.002 0"
      />
    </svg>
  );
};

const CallIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m10.038 5.316.649 1.163c.585 1.05.35 2.426-.572 3.349 0 0-1.12 1.119.91 3.148 2.027 2.027 3.146.91 3.147.91.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5-.837.836-1.863 1.488-2.996 1.53-1.908.073-5.149-.41-8.4-3.66-3.25-3.251-3.733-6.492-3.66-8.4.043-1.133.694-2.159 1.53-2.996 1.394-1.393 3.616-1.206 4.5.38Z" />
  </svg>
);

const EmailIcon = (props) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 2.75C5.385 2.75 3.925 3.154 2.865 4.138 1.795 5.132 1.25 6.607 1.25 8.5v7c0 1.893.545 3.368 1.615 4.362C3.925 20.846 5.385 21.25 7 21.25h10c1.615 0 3.075-.404 4.135-1.388C22.205 18.868 22.75 17.393 22.75 15.5v-7c0-1.893-.545-3.368-1.615-4.362C20.075 3.154 18.615 2.75 17 2.75H7Zm12.228 5.612c.328-.253.388-.724.135-1.052-.253-.328-.724-.388-1.052-.135l-5.547 4.286c-.45.348-1.078.348-1.528 0L5.689 7.175c-.328-.253-.799-.193-1.052.135-.253.328-.193.799.135 1.052l5.547 4.287c.99.765 2.372.765 3.362 0l5.547-4.287Z"
    />
  </svg>
);

export default SocialNav;
