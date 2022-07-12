import React from 'react';
import { Layout } from '../components';
import { gql } from '@apollo/client';

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */

export const TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      title
      author {
        id
        name
        photo
      }
      length
      thumbnail
      modulesCount
    }
  }
`;

const Tracks = () => {
  return <Layout grid> </Layout>;
};

export default Tracks;
