import { FC, useState } from "react";

import { useGetUsersQuery } from "../../store/github/github.api";
import { useLazyGetReposQuery } from "../../store/github/github.api";
import { useDebounce } from "../../hooks/useDebounce";

import SearchItem from "../../components/search-item/SearchItem";

import "./SearchPage.scss";

const SearchPage: FC = () => {
  const [fetchRepos, { data: repos }] = useLazyGetReposQuery();
  const [name, setName] = useState<string>("");

  const debounced = useDebounce(name);

  const { data } = useGetUsersQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true,
  });

  const requestRepos = async (login: string): Promise<void> => {
    fetchRepos(login);
  };

  return (
    <div className="card">
      <div className="input-wrapper">
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div
        className={
          data?.length! > 3 || repos?.length! > 4
            ? "response-wrapper big"
            : "response-wrapper"
        }
      >
        {repos?.length ? (
          repos.map((item, index) => (
            <SearchItem
              key={item.id}
              login={item.full_name}
              url={item.html_url}
              count={index + 1}
            />
          ))
        ) : (
          <>
            {data?.length &&
              data.map((item, index) => (
                <SearchItem
                  key={item.id}
                  login={item.login}
                  url={item.html_url}
                  count={index + 1}
                  requestRepos={requestRepos}
                />
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
