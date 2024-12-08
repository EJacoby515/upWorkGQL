import { client } from './config';
import { SEARCH_FREELANCERS } from './graphql/queries/freelancers';
import { SEARCH_JOBS } from './graphql/queries/jobs';

async function searchFreelancers(searchTerm: string) {
  try {
    const { data } = await client.query({
      query: SEARCH_FREELANCERS,
      variables: {
        searchFilter: {
          searchTerm_eq: searchTerm,
          hourlyRate_eq: {
            min: 20,
            max: 100
          },
          jobSuccessScore_eq: {
            min: 80
          }
        },
        pagination: {
          first: 20,
          after: null
        }
      }
    });
    
    console.log('Freelancers found:', data.freelancerProfileSearchRecords.totalCount);
    return data.freelancerProfileSearchRecords.edges;
  } catch (error) {
    console.error('Error searching freelancers:', error);
    throw error;
  }
}

async function searchJobs(searchTerm: string) {
  try {
    const { data } = await client.query({
      query: SEARCH_JOBS,
      variables: {
        marketPlaceJobFilter: {
          searchExpression_eq: searchTerm,
          clientFeedBackRange_eq: {
            rangeStart: 4.5
          },
          pagination_eq: {
            first: 20,
            after: null
          }
        },
        sortAttributes: ["RELEVANCE"]
      }
    });
    
    console.log('Jobs found:', data.marketplaceJobPostingsSearch.totalCount);
    return data.marketplaceJobPostingsSearch.edges;
  } catch (error) {
    console.error('Error searching jobs:', error);
    throw error;
  }
}
