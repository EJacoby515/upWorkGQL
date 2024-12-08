import { gql } from '@apollo/client';

export const SEARCH_JOBS = gql`
  query searchJobs(
    $marketPlaceJobFilter: MarketplaceJobPostingsSearchFilter,
    $sortAttributes: [MarketplaceJobPostingSearchSortAttribute]
  ) {
    marketplaceJobPostingsSearch(
      marketPlaceJobFilter: $marketPlaceJobFilter,
      searchType: USER_JOBS_SEARCH,
      sortAttributes: $sortAttributes
    ) {
      edges {
        node {
          id
          ciphertext
          title
          description
          workFlowState {
            state
            createdDateTime
            publishedDateTime
          }
          content {
            title
            description
            category
            subcategory
            skills
            jobType
          }
          clientCompanyPublic {
            name
            location {
              country
            }
            feedbackInfo {
              score
            }
          }
          contractTerms {
            contractType
            hourlyContractTerms {
              budget {
                min
                max
              }
            }
            fixedPriceContractTerms {
              budget {
                amount
              }
            }
          }
          activityStat {
            applicantsCount
            interviewingCount
            invitedCount
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