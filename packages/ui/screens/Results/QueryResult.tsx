import React, { ReactNode } from 'react';
import Collapsible from '@sqltools/ui/components/Collpsible';
import ResultsTable from './ResultsTable';
import ErrorIcon from '@sqltools/ui/components/ErrorIcon';

interface QueryResultProps {
  messages: string[];
  cols: string[];
  results: any[];
  error?: boolean;
  query?: string;
}
export default ({ cols, error, query, messages, results }: QueryResultProps) => {
  const table: string | ReactNode = error ? (
    <div
      style={{
        flexGrow: 1,
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div>
        <ErrorIcon />
      </div>
      <div>Query with errors. Please, check the error below.</div>
    </div>
  ) : (
    <ResultsTable cols={!cols || cols.length === 0 ? [''] : cols} data={results || []} paginationSize={20} />
  );

  return (
    <div className="result">
      <div className="results-table">{table}</div>
      <div className="query-extras">
        <Collapsible title="View Query">
          <pre>{query}</pre>
        </Collapsible>
        <Collapsible title={`Messages (${messages.length})`}>
          <div className="messages">
            {(messages.length > 0 ? messages : ['No messages to show.']).map((m, i) => (
              <div key={i} className={'message ' + (error ? 'error' : '')}>
                {m}
              </div>
            ))}
          </div>
        </Collapsible>
      </div>
    </div>
  );
};
