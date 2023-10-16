<script>
  
    export let title;
    export let description;
    export let keywords;
    export let url;

  
  </script>
  
  <svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta charset="UTF-8">
    <meta name="keywords" content={keywords}>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name='language' content='LT'>
    <meta name='url' content={url}>
    <meta name='identifier-URL' content='http://www.baltijosveterinarijosklinika.lt'>

    <meta property="og:title" content={title} />
<meta property="og:type" content="website" />
<meta property="og:url" content={url} />
<meta property="og:description" content={description}/>
<meta property="og:image" content="/article_cat" />
<meta property="og:locate" content="LT_lt"/>
  </svelte:head>