import { gql } from '@apollo/client';

export const SEARCH_FREELANCERS = gql`
  query searchFreelancers(
    $searchFilter: FreelancerProfileSearchFilter!,
    $pagination: Pagination!
  ) {
    freelancerProfileSearchRecords(
      searchFilter: $searchFilter,
      pagination: $pagination
    ) {
      edges {
        node {
          profile {
            identity {
              id
              ciphertext
            }
            personalData {
              firstName
              lastName
              title
              description
              portrait {
                portrait
              }
              location {
                country
                state
                city
              }
            }
            profileAggregates {
              lastWorkedOn
              topRatedStatus
              totalJobs
              totalFeedback
              totalHourlyJobs
              totalFixedJobs
              adjustedCategoryScores {
                averageCategoryScore
              }
            }
            specializedProfilesSkills {
              skills {
                ontologySkill {
                  skill {
                    id
                    preferredLabel
                  }
                }
              }
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
      totalCount
    }
  }
`;