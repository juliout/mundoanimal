import { FacebookProvider, Comments } from 'react-facebook';

export default function CommentsExample() {
  return (
    <FacebookProvider appId="anonymous">
      <Comments width='100%'/>
    </FacebookProvider>
  );
}