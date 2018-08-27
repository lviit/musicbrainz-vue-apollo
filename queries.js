import { gql } from "apollo-boost";

export const NIRVANA_ALBUM_SINGLES = gql`
  query {
    lookup {
      artist(mbid: "5b11f4ce-a62d-471e-81fc-a69a8278c7da") {
        name
        releaseGroups(type: ALBUM) {
          edges {
            node {
              title
              firstReleaseDate
            }
          }
        }
      }
    }
  }
`;

export const ARTIST_DETAILS = mbid => gql`
  query {
    lookup {
      artist(mbid: "${mbid}") {
        name
        area {
          name
        }
        beginArea {
          name
        }
        lifeSpan {
          begin
          end
        }
        releaseGroups {
          ...releaseGroupResults
        }
        theAudioDB {
          biography
          genre
          thumbnail
        }
      }
    }
  }
  ${fragments.releaseGroups}
`;

export const RELEASE_GROUP_DETAILS = mbid => gql`
  query {
    lookup {
      releaseGroup(mbid: "${mbid}") {
        mbid
        title
        artistCredits {
          name
        }
        firstReleaseDate
        primaryType
        theAudioDB {
          description           
        }
        coverArtArchive {
          front(size:FULL)
        }
      }
    }
  }
`;

export const SEARCH_ARTISTS = keywords => gql`
  query {
    search {
      artists(query: "${keywords}", first: 20) {
        ...artistResults
      }
    }
  }
  ${fragments.artists}
`;

export const SEARCH_LABELS = keywords => gql`
  query {
    search {
      labels(query: "${keywords}", first: 20) {
        ...labelResults
      }
    }
  }
  ${fragments.labels}
`;

const fragments = {
  artists: gql`
    fragment artistResults on ArtistConnection {
      pageInfo {
        endCursor
      }
      edges {
        cursor
        node {
          mbid
          name
          country
          lifeSpan {
            begin
            end
          }
          theAudioDB {
            thumbnail
          }
        }
      }
    }
  `,
  releaseGroups: gql`
    fragment releaseGroupResults on ReleaseGroupConnection {
      pageInfo {
        endCursor
      }
      edges {
        cursor
        node {
          mbid
          title
          artistCredits {
            name
          }
          firstReleaseDate
          theAudioDB {
            description           
          }
          coverArtArchive {
            front(size:SMALL)
          }
        }
      }
    }
  `,
  labels: gql`
    fragment labelResults on LabelConnection {
      pageInfo {
        endCursor
      }
      edges {
        cursor
        node {
          mbid
          name
          type
          area {
            name
          }
        }
      }
    }
  `,
};
