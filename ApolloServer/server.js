const {gql, ApolloServer} = require("apollo-server");
const axios = require("axios");

const typeDefs = gql`
    type Speaker {
        id: ID!
        first: String 
        last: String 
        favorite: Boolean
    }

    input SpeakerInput {
        first: String 
        last: String
        favorite: Boolean
    }

    type Query {
        speakers: [Speaker]
    }

    type Mutation {
        toggleSpeakerFavorite(speakerId: Int!) : Speaker
        addSpeaker(speaker: SpeakerInput) : Speaker
        deleteSpeaker(speakerId: Int!) : Speaker
    }
    `;

   

const resolvers = {
    Query: {
         async speakers(parent, args, content, info) {
            const res = await axios.get("http://localhost:5000/speakers")
            return res.data;
        },
    },
    Mutation: {
       async toggleSpeakerFavorite(parent, args, content, info) {
            const res = await axios.get(`http://localhost:5000/speakers/${args.speakerId}`);
            const toggledData = {...res.data, favorite: !response.data.favorite};
            await axios.put(`http://localhost:5000/speakers/${args.speakerId}`, toggledData);
            return toggledData
       },
       async addSpeaker(parent, args, content, info) {
        const {first, last, favorite} = args.speaker; 
        const res = await axios.get("http://localhost:5000/speakers");
          const foundRec = res.data.find((a) => a.first === first && a.last === last
      );
        if(foundRec) {
            throw new UserInputError("first and last already exist", {
                invalidArgs: Object.keys(args),
            });
        }
        const resp = await axios.post("http://localhost:5000/speakers", {first, last, favorite});
        return resp.data;
       },
       async deleteSpeaker(parent, args, content, info) {
        const url = `http://localhost:5000/speakers/${args.speakerId}`;
        const foundRec = await axios.get(url);
        await axios.delete(url); 
        return foundRec.data;
       }

    }
}

async function apolloServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });
    server.listen(4000, () => {
        console.log('Server Starting....')
    })
};

apolloServer()
