module Jekyll
    class CategoryPageGenerator < Generator
      safe true
  
      # Creates pages for a website's categories based on the site's layout and configuration.
      # 
      # @param site [Object] Ruby on Rails website for which the code is generating documentation.
      # 
      # @returns [Object] a list of `CategoryPage` objects for each category found in the
      # site's layout.
      def generate(site)
        if site.layouts.key? 'category_index'
          dir = site.config['category_dir'] || 'categories'
          site.categories.each_key do |category|
            site.pages << CategoryPage.new(site, site.source, File.join(dir, category), category)
          end
        end
      end
    end
  
    # A Page subclass used in the `CategoryPageGenerator`
    class CategoryPage < Page
      # Sets up an instance of a class, initializing properties such as `@site`, `@base`,
      # `@dir`, and `@name`. It also calls two methods: `process()` and `read_yaml()`, and
      # assigns values to instance variables `data['category']` and `data['title']`.
      # 
      # @param site [Object] website object that provides configuration information,
      # including a value for the `config['category_title_prefix']` property, which is
      # used to prefix the title of the category category in the generated HTML.
      # 
      # @param base [String] directory where the site's layout files are located.
      # 
      # @param dir [String] directory where the file name will be created or retrieved from.
      # 
      # @param category [String] category value that will be used to generate the category
      # index page.
      # 
      # @returns [Class] a modified version of the `index.html` file, with the specified
      # category added to the title prefix.
      def initialize(site, base, dir, category)
        @site = site
        @base = base
        @dir  = dir
        @name = 'index.html'
  
        self.process(@name)
        self.read_yaml(File.join(base, '_layouts'), 'category_index.html')
        self.data['category'] = category
  
        category_title_prefix = site.config['category_title_prefix'] || 'Category: '
        self.data['title'] = "#{category_title_prefix}#{category}"
      end
    end
  end