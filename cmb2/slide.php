<?php

add_action('cmb2_admin_init', 'cmb2_fields_slides');

function cmb2_fields_slides() {
  $cmb = new_cmb2_box([
    'id' => 'slide_box',
    'title' => 'Slide',
    'object_types' => ['page'],
    'show_on' => [
      'key' => 'page_template',
      'value' => 'page-home.php' 
    ],
  ]);
  $cmb->add_field([
    'name' => 'Adicione Banner no Slide',
    'id' => 'add_slide_home',
    'type' => 'file_list',
    'query_args' =>[
      'type' => 'image',
      'srcset' => false
    ],
    ]);
  $cmb->add_field([
    'name' => 'Link do Slide (precisa estar na mesma ordem das fotos)',
    'id' => 'add_slide_home_url',
    'type' => "text_url",
    'repeatable' => true,
    'options' => (['add_row_text' => 'Link do próximo Slide (precisa estar na ordem das fotos)'
    ]),
  ]);  

}

function cmb2_slide_file_list($file_list_meta_id, $url_list_meta_id, $image_size = "medium") {
  // Get the list of images and URLs
  $files = array_values(get_post_meta(get_the_ID(), $file_list_meta_id, true));
  $urls = array_values(get_post_meta(get_the_ID(), $url_list_meta_id, true));

  echo '<div class="slide-wrapper">';
  echo '<ul class="slide">';
  foreach ($files as $index => $attachment_id) {
    echo '<li>';
    $url = isset($urls[$index]) ? esc_url($urls[$index]) : '';
    if (!empty($url)) {
      echo '<a class="slide-link" href="' . $url . '"><img src="' . $attachment_id . '" alt="Slide Promocional" width="1260" height="460"';
      // Add the loading="lazy" attribute to all items except the first one
      if ($index !== 0) {
        echo ' loading="lazy"';
      }
      echo '></a>';
    }
    echo '</li>';
  }
  echo '</ul>';
  echo '</div>';
}



?>