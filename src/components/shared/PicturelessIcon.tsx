import type { FC } from "react";

export const PicturelessIcon: FC = () => {
  const bgColors = ["#5a3Fe7", "#e73f78", "#cce73f", "#3fe7ae"];
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * 4);
    return bgColors[randomIndex];
  };

  return (
    <div className="w-10 h-10">
      <svg
        width='40'
        height='40'
        viewBox='0 0 73 73'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='36.5' cy='36.5' r='36.5' fill={getRandomColor()} />
        <path
          d='M54.9672 52.8231L54.5659 53.0171C52.1581 54.1707 49.3979 54.477 46.8041 53.8645C45.4044 53.5378 44.1026 52.9661 42.9183 52.18C45.2674 52.8231 47.8318 52.5169 49.9949 51.3224C50.0928 51.2714 50.2005 51.2101 50.2984 51.1489L50.7192 50.9038L49.5447 48.7497L49.1238 49.005C49.0455 49.056 48.9672 49.0969 48.8889 49.1377C46.5496 50.424 43.7894 50.3321 41.5089 48.9029C39.4828 47.637 38.1712 45.5441 37.8482 43.1654C40.6377 42.9 47.4795 41.6545 52.9705 35.9272C53.1173 35.7741 53.2641 35.621 53.4011 35.4678C54.9182 33.7936 55.6426 31.8028 55.4859 29.6998C55.3489 27.8519 54.5365 26.0653 53.2054 24.6769C51.8742 23.2885 50.1515 22.4309 48.3897 22.2982C46.8139 22.1655 45.2674 22.6147 43.9069 23.5846C43.6035 21.8899 42.8204 20.4504 41.6165 19.3682C40.2658 18.1636 38.4844 17.5 36.5953 17.5C34.7063 17.5 32.9151 18.1636 31.5742 19.3682C30.3702 20.4504 29.5872 21.8899 29.2838 23.5846C27.9233 22.6147 26.3866 22.1655 24.8009 22.2982C23.0293 22.4412 21.3165 23.2885 19.9853 24.6769C18.6444 26.0756 17.832 27.8621 17.7047 29.6998C17.5481 31.8028 18.2724 33.7936 19.7895 35.4678C19.9266 35.621 20.0734 35.7741 20.2202 35.9272C25.7112 41.6545 32.5432 42.9 35.3425 43.1654C35.0195 45.5441 33.6981 47.637 31.6818 48.9029C29.3915 50.3424 26.6313 50.424 24.3018 49.1377C24.2235 49.0969 24.1452 49.0458 24.0668 49.005L23.646 48.7497L22.4714 50.9038L22.8923 51.1489C22.9902 51.2101 23.0978 51.2714 23.1957 51.3224C25.3686 52.5169 27.9331 52.8231 30.2724 52.18C29.0978 52.9661 27.7862 53.5378 26.3866 53.8645C23.7928 54.477 21.0326 54.1707 18.6248 53.0171L18.2235 52.8231L17 54.967L17.4796 55.2018C20.3572 56.6107 23.7438 56.9986 26.876 56.2738C30.1255 55.5081 32.9445 53.6705 35.0293 50.9549C35.1565 50.7915 35.274 50.618 35.4012 50.4547V56.6515H37.7699V50.4342C37.8971 50.6078 38.0146 50.7915 38.1516 50.9549C40.2364 53.6705 43.0553 55.5081 46.3049 56.2738C47.3522 56.5188 48.4289 56.6413 49.5055 56.6413C51.6491 56.6413 53.7829 56.1411 55.7013 55.2018L56.1515 54.967L54.9672 52.8231ZM31.4861 26.0449C31.4861 25.902 31.4763 25.7591 31.4763 25.6059C31.4763 25.412 31.4763 25.218 31.4861 25.0342C31.5742 21.5428 34.1875 19.9502 36.5758 19.9502C38.964 19.9502 41.5774 21.5428 41.6655 25.0342C41.6752 25.2282 41.6752 25.4222 41.6752 25.6059C41.6752 25.7591 41.6752 25.902 41.6655 26.0551L41.5774 29.3833L43.7992 26.9331C43.8873 26.831 43.9754 26.7391 44.0733 26.6371C44.2005 26.5043 44.3376 26.3716 44.4648 26.2389C46.8922 23.8398 49.8188 24.6361 51.5121 26.4022C53.2054 28.1684 53.9688 31.2107 51.6687 33.7527C51.5414 33.8957 51.4142 34.0284 51.2869 34.1611C45.0912 40.6438 36.6541 40.7561 36.5758 40.7561C36.4877 40.7561 28.0701 40.6438 21.8646 34.1713C21.7373 34.0386 21.6101 33.8957 21.4828 33.7629C19.1827 31.2209 19.9462 28.1786 21.6395 26.4125C22.6574 25.3507 23.9983 24.7382 25.3099 24.7382C26.5334 24.7382 27.6688 25.2486 28.6867 26.2491C28.8238 26.3818 28.951 26.5145 29.0782 26.6473C29.1761 26.7596 29.274 26.8617 29.3817 26.974L31.5839 29.3935L31.4861 26.0449Z'
          fill='#F9FAFB'
        />
        <path
          d='M27 34.5962C27 32.7863 28.71 31.3182 30.8193 31.3182C32.9287 31.3182 34.6387 32.7863 34.6387 34.5962'
          stroke='#F9FAFB'
          strokeWidth='1.15152'
          strokeLinejoin='round'
        />
        <path
          d='M32.8943 33.1447C32.8943 33.6404 32.4925 34.0422 31.9969 34.0422C31.5012 34.0422 31.0994 33.6404 31.0994 33.1447C31.0994 32.6491 31.5012 32.2473 31.9969 32.2473C32.4925 32.2473 32.8943 32.6491 32.8943 33.1447Z'
          fill='#F9FAFB'
          stroke='#F9FAFB'
          strokeWidth='1.15152'
        />
        <path
          d='M37.5031 34.5962C37.5031 32.7863 39.2131 31.3182 41.3225 31.3182C43.4318 31.3182 45.1418 32.7863 45.1418 34.5962'
          stroke='#F9FAFB'
          strokeWidth='1.15152'
          strokeLinejoin='round'
        />
        <path
          d='M43.3988 33.1447C43.3988 33.6404 42.997 34.0422 42.5013 34.0422C42.0057 34.0422 41.6039 33.6404 41.6039 33.1447C41.6039 32.6491 42.0057 32.2473 42.5013 32.2473C42.997 32.2473 43.3988 32.6491 43.3988 33.1447Z'
          fill='#F9FAFB'
          stroke='#F9FAFB'
          strokeWidth='1.15152'
        />
        <path
          d='M38.4477 36.5352C38.0254 37.3095 37.1115 37.8484 36.0491 37.8484C34.9868 37.8484 34.0729 37.3095 33.6505 36.5352'
          stroke='#F9FAFB'
          strokeWidth='1.15152'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  );
};