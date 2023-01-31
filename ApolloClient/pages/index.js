import { useMutation, useQuery, useApolloClient } from '@apollo/client';
import ToolBar from '../components/ToolBar';
import {
  GET_SPEAKERS,
  TOGGLE_SPEAKER_FAVORITE,
  DELETE_SPEAKER,
  ADD_SPEAKER,
} from './queries';

const IndexPage = () => {
  const { loading, error, data } = useQuery(GET_SPEAKERS);
  const apolloClient = useApolloClient();
  const [toggleSpeakerFavorite] = useMutation(TOGGLE_SPEAKER_FAVORITE);
  const [deleteSpeaker] = useMutation(DELETE_SPEAKER);
  const [addSpeaker] = useMutation(ADD_SPEAKER);

  if (loading === true) return <div className="col-sm6">Loading...</div>;

  if (error === true) return <div className="col-sm6">Error</div>;

  return (
    <>
      <ToolBar
        sortByIdDesending={() => {
          const { speakers } = apolloClient.cache.readQuery({
            query: GET_SPEAKERS,
          });
          apolloClient.cache.writeQuery({
            query: GET_SPEAKERS,
            data: {
              speakers: {
                __typename: 'SpeakerResults',
                datalist: [...speakers.datalist].sort((a, b) => b.id - a.id),
              },
            },
          });
        }}
        insertSpeakerEvent={(first, last, favorite) => {
          addSpeaker({
            variables: {
              first,
              last,
              favorite,
            },
            //refetchQueries: [{ query: GET_SPEAKERS }],
            /* the above commented out code makes a request to the server 
              this function is for replace the cache which in turn will update the server which means we dont have 
              to make a request to the server to get more data which improves performance
              @param: cache = our current apollo cache
              @param: results of mutation(aka data is the new inserted record)
            */
            update: (
              cache,
              { data: { addSpeaker }, loading, errored, called, client },
            ) => {
              //read the cache desired cache list
              const { speakers } = cache.readQuery({
                query: GET_SPEAKERS,
              });
              //replace the cache
              cache.writeQuery({
                query: GET_SPEAKERS,
                data: {
                  speakers: {
                    _typename: 'SpeakerResults',
                    datalist: [addSpeaker, ...speakers.datalist],
                  },
                },
              });
            },
          });
        }}
      />
      <div className="container show-fav">
        <div className="row">
          <div className="fav-list">
            {data.speakers.datalist.map(({ id, first, last, favorite }) => {
              return (
                <div className="favbox" key={id}>
                  <div className="fav-clm col-sm-7">
                    <h4>
                      {first} {last} ({id})
                    </h4>
                  </div>
                  <div className="fav-clm col-sm-5">
                    <div className="action">
                      <span
                        onClick={() => {
                          toggleSpeakerFavorite({
                            variables: {
                              speakerId: parseInt(id),
                            },
                            //optimist UI
                            optimisticResponse: {
                              _typename: '__mutation',
                              toggleSpeakerFavorite: {
                                id,
                                first,
                                last,
                                favorite: !favorite,
                                __typename: 'Speaker',
                              },
                            },
                          });
                        }}
                      >
                        <div
                          className={
                            favorite === true
                              ? 'fa fa-star orange'
                              : 'fa fa-star-o orange'
                          }
                        />
                        &nbsp;&nbsp; Favorite
                      </span>
                      <span
                        onClick={() => {
                          deleteSpeaker({
                            variables: {
                              speakerId: parseInt(id),
                            },
                            //optimist UI
                            optimisticResponse: {
                              _typename: '__mutation',
                              deleteSpeaker: {
                                id,
                                first,
                                last,
                                favorite,
                                __typename: 'Speaker',
                              },
                            },
                            //refetchQueries: [{ query: GET_SPEAKERS }],
                            update: (
                              cache,
                              {
                                data: { deleteSpeaker },
                                loading,
                                errored,
                                called,
                                client,
                              },
                            ) => {
                              //read the cache desired cache list
                              const { speakers } = cache.readQuery({
                                query: GET_SPEAKERS,
                              });
                              //replace the cache
                              cache.writeQuery({
                                query: GET_SPEAKERS,
                                data: {
                                  speakers: {
                                    _typename: 'SpeakerResults',
                                    datalist: speakers.datalist.filter(
                                      (record) => record.id != deleteSpeaker.id,
                                    ),
                                  },
                                },
                              });
                            },
                          });
                        }}
                      >
                        <i className="fa fa-trash red" /> Delete
                      </span>
                    </div>
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
