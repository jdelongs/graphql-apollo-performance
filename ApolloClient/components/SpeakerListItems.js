import { useMutation, useQuery, useApolloClient } from '@apollo/client';
import ToolBar from '../components/ToolBar';
import { GET_SPEAKERS } from '../graphql/queries';
import { ADD_SPEAKER } from '../graphql/mutations';
import SpeakerItem from './SpeakerItem';

const SpeakerListItems = () => {
  const { loading, error, data } = useQuery(GET_SPEAKERS);

  if (loading === true) return <div className="col-sm6">Loading...</div>;

  if (error === true) return <div className="col-sm6">Error</div>;

  return (
    <>
      <ToolBar />
      <div className="container show-fav">
        <div className="row">
          <div className="fav-list">
            {data.speakers.datalist.map(({ id, first, last, favorite }) => {
              return (
                <SpeakerItem
                  key={id}
                  speakerRec={{ id, first, last, favorite }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SpeakerListItems;
