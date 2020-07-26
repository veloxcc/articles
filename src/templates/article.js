import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import TextSlice from '../components/TextSlice';
import BannerWithCaptionSlice from '../components/BannerWithCaptionSlice';
import YouTubeVideo from '../components/YouTubeVideo';
import InstagramEmbed from '../components/InstagramEmbed';
import TwitterEmbed from '../components/TwitterEmbed';

const getVideo = (source, video_id, key) => {
  switch (source) {
    case 'YouTube':
      return <YouTubeVideo key={key} videoId={video_id} />;
    default:
      return null;
  }
};

const getSlice = (type, props, key) => {
  switch (type) {
    case 'text':
      return <TextSlice key={key} rawText={props.text.raw} />;
    case 'banner_with_caption':
      return (
        <BannerWithCaptionSlice
          sizes={props.image_banner.thumbnails}
          key={key}
        />
      );
    case 'video':
      return getVideo(props.source, props.video_id, key);
    case 'instagram':
      return <InstagramEmbed key={key} postUrl={props.post_url} />;
    case 'twitter':
      return <TwitterEmbed key={key} tweetId={props.tweet_id} />;
    default:
      return null;
  }
};

const Article = ({ data: { prismicArticle } }) => {
  const { data } = prismicArticle;
  const { body: slices = [] } = data;
  return (
    <Layout pageTitle={data.title.text}>
      <h1>{data.title.text}</h1>
      {slices.map(({ slice_type, primary }, i) => getSlice(slice_type, primary, `key_${i}`))}
    </Layout>
  );
};

export default Article;

export const pageQuery = graphql`
  query ArticleBySlug($id: String!) {
    prismicArticle(id: { eq: $id }) {
      id
      data {
        title {
          text
        }
        body {
          ... on PrismicArticleBodyBannerWithCaption {
            primary {
              title_of_banner {
                text
              }
              image_banner {
                alt
                thumbnails {
                  crop_3x2 {
                    url
                    alt
                  }
                  crop_16x9 {
                    url
                    alt
                  }
                }
              }
              description {
                text
              }
              button_link {
                url
                type
                target
                link_type
                raw
                size
                slug
              }
              button_label {
                text
              }
            }
            slice_type
          }
          ... on PrismicArticleBodyText {
            slice_type
            primary {
              text {
                raw
              }
            }
          }
          ... on PrismicArticleBodyVideo {
            slice_type
            primary {
              source
              video_id
            }
          }
          ... on PrismicArticleBodyInstagram {
            slice_type
            primary {
              post_url
            }
          }
          ... on PrismicArticleBodyTwitter {
            slice_type
            primary {
              tweet_id
            }
          }
        }
      }
    }
  }
`;
