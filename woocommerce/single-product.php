<?php get_header(); ?>

<div class="container breadcrumb"><?php woocommerce_breadcrumb(['delimiter' => '>']); ?></div>

<div class='container notificacao'> 
  <?php wc_print_notices(); ?>
</div>

<main class="product-main">
<?php
if(have_posts()) { while(have_posts()) { the_post(); 
  $product_data = meufoot_format_single_product(get_the_ID(), $image_size = "'gallery-main'"); 
?>
  <div class="product-gallery" data-gallery="gallery">
    <div class="product-gallery__list">
      <?php foreach($product_data['gallery'] as $img) { ?>
        <img data-gallery="gallery-list" src="<?= $img; ?>" alt="<?= $product_data['name']; ?>">
        <?php } ?>
    </div>
    <div class="product-gallery__main">
        <img data-gallery="gallery-main" src="<?= $product_data['img']; ?>" alt="<?= $product_data['name']; ?>">
    </div>
  </div>
  <section class="product-info">
    <small><?= $product_data['sku']; ?></small>
    <h1><?= $product_data['name']; ?></h1>
    <p class="product-info__price" ><?= $product_data['price']; ?></p>
    <?php meufoot_get_product_variation(get_the_ID()) ?>
    <?php woocommerce_template_single_add_to_cart(); ?>
     
    <h2>Descrição</h2>
    <p><?= $product_data['description']; ?></p>
  </section>
<?php } } ?>
</main>

<?php
$related_ids = wc_get_related_products($product_data['id'],3);
$related_products = [];
foreach($related_ids as $product_id) {
  $related_products[] = wc_get_product($product_id);
}
$related = format_products($related_products);
?>
<section class="container">
<div class="product-related">
  <h2>As Pessoas também procuram:</h2>
  <?php meufoot_product_list($related); ?>
</div>
</section>
<?php get_footer(); ?>

<?php

?>