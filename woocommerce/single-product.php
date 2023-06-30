<?php get_header(); ?>

<div class="container breadcrumb"><?php woocommerce_breadcrumb(['delimiter' => '>']); ?></div>

<div class='container notificacao'> 
  <?php wc_print_notices(); ?>
</div>

<main>
<?php
if(have_posts()) { while(have_posts()) { the_post(); 
  $produto = format_single_products(get_the_ID(), $image_size = "'gallery-main'"); 
?>
  <div class="product-gallery" data-gallery="gallery">
    <div class="product-gallery__list">
      <?php foreach($produto['gallery'] as $img) { ?>
        <img data-gallery="gallery-list" src="<?= $img; ?>" alt="<?= $produto['name']; ?>">
        <?php } ?>
    </div>
    <div class="product-gallery__main">
        <img data-gallery="gallery-main" src="<?= $produto['img']; ?>" alt="<?= $produto['name']; ?>">
    </div>
  </div>
  <section class="product-info">
    <small><?= $produto['sku']; ?></small>
    <h1><?= $produto['name']; ?></h1>
    <p class="product-info__price" ><?= $produto['price']; ?></p>
    <?php woocommerce_template_single_add_to_cart() ?>
    <h2>Descrição</h2>
    <p><?= $produto['description']; ?></p>
  </section>
<?php } } ?>
</main>

<?php
$related_ids = wc_get_related_products($produto['id'],3);
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