import { NextPage } from "next";
import { text } from "node:stream/consumers";
import Header from "../../components/header";
import InvestorDashboard from "../investors/[investorID]";
import { ApolloClient, InMemoryCache, createHttpLink, gql} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

// This page is initialized when builders sbmit the first form with profile info,
// then they arrive here to their new page to fill out roadmap building form.
// when roadmap is submitted the page displays profile card, roadmap component and progess/status component
// All contract interactions will happen from this page. 
// Will include buttons to 
// 1)deposit funds (always available),
// 2)builders submit checkpoint requirements/claim funds (diasbled unless wallet is project owner),
// 3)collect refunds (disabled unless wallet is investor).
// Each button should pop up a modal to set params of the transaction.

const ProjectProfile: NextPage = ({ repository }) => {
    return (
        <div className="relative w-screen h-screen circuitBoard">

            {/* learn how to receive the project id/name here */}
            <Header title={repository.name} />

        </div>
    )
}

export default ProjectProfile

export async function getServerSideProps(context) {
    const { query } = context

    const httpLink = createHttpLink({
        uri: 'https://api.github.com/graphql',
      });
      
      const authLink = setContext((_, { headers }) => {
        return {
          headers: {
            ...headers,
            authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`
          }
        }
      });

    const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
    });

    const { data } = await client.query({
        query: gql`
        {
            repository(name: "${query.name}", owner: "${query.owner}") {
              id
              owner {
                login
              }
              url
              name
            }
          }`
    })

    const { repository } = data;

    return {
        props: {
          repository
        }
    }
}