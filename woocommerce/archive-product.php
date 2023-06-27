<?php get_header() ?>
<?php
$products=[];
if(have_posts()) {while(have_posts()){the_post();
$products[] = wc_get_product(get_the_ID());
} };
$data['products'] = format_products($products);
?>

<div class='container breadcrumb'>
 <?php woocommerce_breadcrumb(['delimiter' => ' > ']); ?> 
</div>
<article class='container products-archive'>
<nav class="filters">
  <h1 class='font-2-up-l'>Filtros</h1>
  <div class="filter">
  <h2 class="font-1-l">Sub-Categorias</h2>
  <?php wp_nav_menu([
    'menu' => 'categorias-internas',
    'menu-class' => 'filter-category',
    'container' => false,
  ]); ?>
  </div>
  <div class="filter">
  <?php 
    $attribute_taxonomies = wc_get_attribute_taxonomies();
    foreach($attribute_taxonomies as $attribute) {
      the_widget('WC_Widget_Layered_Nav', [
        'title' => $attribute -> attribute_label,
        'attribute' => $attribute -> attribute_name,
      ]);
    }
    ?>
  </div>
  <div class="filter">
    <h2 class="font-1-l">Filtrar por preço</h2>
    <form class="filter-price">
      <div>
      <label for="min_price">De R$</label>
      <input type="text" placeholder="50,00" name="min_price" id="min_price" value="<?= $_GET['min_price'] ?? ""; ?>">
      </div>
      <div>
      <label for="max_price">Até R$</label>
      <input type="text" name="max_price" id="max_price" value="<?= $_GET['max_price'] ?? ""; ?>">
      </div>
      <button type="submit">Filtrar</button>
    </form>
  </div>
</nav>


<main class="products-showOn">
  <?php if($data['products']) {?>
    <?php meufoot_product_list($data['products']); ?>
    <?= get_the_posts_pagination(); ?>
  <?php } else { ?> 
    <p class='not-finded'>Ops! Dessa vez não encontramos</p>
  <?php } ?>  
</main>
</article>

<?php get_footer() ?>