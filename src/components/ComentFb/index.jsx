import { FacebookProvider, Comments } from 'react-facebook';

export default function CommentsExample() {
  return (
    <FacebookProvider appId="383481562064779">
      <Comments/>
    </FacebookProvider>
  );
}