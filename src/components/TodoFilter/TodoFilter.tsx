import { Dispatch, SetStateAction } from 'react';

import { SetStateСompletedStatus } from '../../types/SetStateСompletedStatus';
import { СompletedStatus } from '../../types/СompletedStatus';

export const TodoFilter: React.FC<{
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  setFilterStatus: SetStateСompletedStatus;
}> = ({ query, setQuery, setFilterStatus }) => {
  function handleSearchChange(value: string) {
    setQuery(value);
  }

  return (
    <form className="field has-addons">
      <p className="control">
        <span className="select">
          <select
            onChange={event =>
              setFilterStatus(event.target.value as СompletedStatus)
            }
            data-cy="statusSelect"
          >
            <option value={СompletedStatus.all}>All</option>
            <option value={СompletedStatus.active}>Active</option>
            <option value={СompletedStatus.completed}>Completed</option>
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          value={query}
          onChange={event => handleSearchChange(event.target.value)}
          data-cy="searchInput"
          type="text"
          className="input"
          placeholder="Search..."
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>

        {query && (
          <span className="icon is-right " style={{ pointerEvents: 'all' }}>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              onClick={() => handleSearchChange('')}
              data-cy="clearSearchButton"
              type="button"
              className="delete"
            />
          </span>
        )}
      </p>
    </form>
  );
};
