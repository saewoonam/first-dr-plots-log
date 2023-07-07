var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'git@github.com:saewoonam/first-dr-plots-log.git',
        user: {
            name: 'Sae Woo Nam', // update to use your name
            email: 'saewoo.nam@nist.gov' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
