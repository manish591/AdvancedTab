import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Links = () => {
  const [isLinksOpen, setIsLinksOpen] = useState(false);
  const [userLinks, setUserLinks] = useState(() => {
    if (typeof window === 'undefined') {
      return [];
    }
    try {
      const item = window.localStorage.getItem('linksdata');
      return item ? JSON.parse(item) : [];
    } catch (error) {
      console.log(error);
      return [];
    }
  });
  const [addNewLink, setAddNewLink] = useState(false);
  const [linkData, setLinkData] = useState({
    title: '',
    url: '',
  });

  const handleCreateUserLink = (e) => {
    e.preventDefault();
    const newLinkData = { ...linkData, id: uuidv4() };
    setUserLinks([...userLinks, newLinkData]);
    setAddNewLink(false);
    setLinkData({
      title: '',
      url: '',
    });
  };

  useEffect(() => {
    localStorage.setItem('linksdata', JSON.stringify(userLinks));
  }, [userLinks]);

  return (
    <section className="absolute left-0 top-0">
      <section className="relative">
        <p
          className="font-semibold text-lg cursor-pointer"
          onClick={() => {
            setIsLinksOpen((lo) => !lo);
          }}
        >
          Links
        </p>
        {isLinksOpen && (
          <div className="absolute text-black w-60 rounded-md top-full left-0 overflow-hidden flex">
            <section
              className={`min-w-full transition-transform	duration-500 py-4 px-3 bg-white ${
                addNewLink ? '-translate-x-full self-strech' : 'self-start'
              }`}
            >
              <ul className="grid gap-1">
                <li>
                  <section className="flex items-center gap-2">
                    <span class="material-icons-outlined text-xl">tab</span>
                    <a
                      href="chrome-search://local-ntp/local-ntp.html"
                      className="text-sm"
                    >
                      Chrome Tab
                    </a>
                  </section>
                </li>
                <li>
                  <section className="flex items-center gap-2">
                    <span class="material-icons-outlined text-xl">apps</span>
                    <a
                      href="chrome-search://local-ntp/local-ntp.html"
                      className="text-sm"
                    >
                      Apps
                    </a>
                  </section>
                </li>
                {userLinks &&
                  userLinks.map((item) => {
                    return (
                      <li key={item.id}>
                        <a href={item.url} className="flex items-center gap-2">
                          <span class="material-icons-round text-xl -rotate-90">
                            expand_circle_down
                          </span>
                          <button className="text-sm">{item.title}</button>
                        </a>
                      </li>
                    );
                  })}
              </ul>
              <div
                className="opacity-60 mt-2"
                onClick={() => {
                  setAddNewLink((anl) => !anl);
                }}
              >
                <section className="flex items-center gap-2">
                  <span class="material-icons-outlined text-xl">add</span>
                  <button className="text-sm">New Link</button>
                </section>
              </div>
            </section>
            <section
              className={`min-w-full transition-transform duration-500 px-3 py-4 bg-white ${
                addNewLink && '-translate-x-full'
              }`}
            >
              <div
                onClick={() => {
                  setAddNewLink(false);
                }}
              >
                <span className="material-icons-outlined text-sm hover:bg-gray-200 w-5 h-5 rounded-full flex items-center justify-center">
                  west
                </span>
              </div>
              <form className="mt-4 grid gap-2" onSubmit={handleCreateUserLink}>
                <section>
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    id="title"
                    className="block w-full mt-1 outline-none border-b-2 px-0.5"
                    value={linkData.title}
                    onChange={(e) => {
                      setLinkData({ ...linkData, title: e.target.value });
                    }}
                    required
                  />
                </section>
                <section>
                  <label htmlFor="link">Link</label>
                  <input
                    type="text"
                    id="link"
                    className="block w-full mt-1 outline-none border-b-2 px-0.5"
                    value={linkData.link}
                    onChange={(e) => {
                      setLinkData({ ...linkData, url: e.target.value });
                    }}
                    required
                  />
                </section>
                <button className="justify-self-start mt-2 bg-gray-500 px-5 py-2 text-white rounded-3xl">
                  Create
                </button>
              </form>
            </section>
          </div>
        )}
      </section>
    </section>
  );
};

export { Links };
