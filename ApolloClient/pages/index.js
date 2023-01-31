import { useMutation, useQuery } from '@apollo/client';
import ToolBar from '../components/ToolBar';
import {
  GET_SPEAKERS,
  TOGGLE_SPEAKER_FAVORITE,
  DELETE_SPEAKER,
  ADD_SPEAKER,
} from './queries';

const IndexPage = () => {
  const { loading, error, data } = useQuery(GET_SPEAKERS);
  const [toggleSpeakerFavorite] = useMutation(TOGGLE_SPEAKER_FAVORITE);
  const [deleteSpeaker] = useMutation(DELETE_SPEAKER);
  const [addSpeaker] = useMutation(ADD_SPEAKER);

  if (loading === true) return <div className="col-sm6">Loading...</div>;

  if (error === true) return <div className="col-sm6">Error</div>;

  return (
    <>
      <ToolBar
        insertSpeaker={(first, last, favorite) => {
          addSpeaker({
            variables: {
              first,
              last,
              favorite,
            },
            update: (cache, {data: {addSpeaker}}) => {
              const {speakers} = cache.readQuery({query: GET_SPEAKERS});
              cache.writeQuery({
                query: GET_SPEAKERS,
                data: {
                  speakers: {
                    
                  }
                }
              });
            }
          });
        }}
      />
      <div className="container show-fav">
        <div className="row">
          <div className="fav-list">
            {data.speakers.map(({ id, first, last, favorite }) => {
              return (
                <div className="favbox" key={id}>
                  <div className="fav-clm col-sm-7">
                    <h4>
                      {first} {last} ({id})
                    </h4>
                  </div>
                  <div className="fav-clm col-sm-5">
                    <span
                      className="action"
                      onClick={() =>
                        toggleSpeakerFavorite({
                          variables: {
                            speakerId: parseInt(id),
                          },
                        })
                      }
                    >
                      <div
                        className={
                          favorite === true
                            ? 'fa fa-star orange'
                            : 'fa fa-star-o orange'
                        }
                      ></div>
                      &nbsp;&nbsp; Favorite
                    </span>
                    <span
                      className="action"
                      onClick={() =>
                        deleteSpeaker({
                          variables: {
                            speakerId: parseInt(id),
                          },
                          refetchQueries: [{ query: GET_SPEAKERS }],
                        })
                      }
                    >
                      <i className={'fa fa-trash red'} /> Delete
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
