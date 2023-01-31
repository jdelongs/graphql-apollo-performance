import { useMutation } from '@apollo/client';
import { GET_SPEAKERS } from '../graphql/queries';
import { TOGGLE_SPEAKER_FAVORITE, DELETE_SPEAKER } from '../graphql/mutations';

const SpeakerListItems = ({ speakerRec }) => {
  const { id, first, last, favorite } = speakerRec;
  const [toggleSpeakerFavorite] = useMutation(TOGGLE_SPEAKER_FAVORITE);
  const [deleteSpeaker] = useMutation(DELETE_SPEAKER);

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
                favorite === true ? 'fa fa-star orange' : 'fa fa-star-o orange'
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
                  { data: { deleteSpeaker }, loading, errored, called, client },
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
};

export default SpeakerListItems;
