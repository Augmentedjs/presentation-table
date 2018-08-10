
	describe('Given Augmented Automatic Table', () => {
		it('is defined', () => {
			expect(Table.AutomaticTable).to.not.be.undefined;
		});

		it('is not initialized without a schema', () => {
			let at = new Table.AutomaticTable({"el": "#sandbox"});
			expect(at).to.not.be.undefined;
			expect(at.isInitalized).to.be.false;
		});

		describe('Given some user data and a schema', () => {
			let uri = "test.json";
			let schema = {
				"$schema": "http://json-schema.org/draft-04/schema#",
				"title": "User",
				"description": "A list of users",
				"type": "object",
				"properties": {
					"Name" : {
						"description": "Name of the user",
						"type" : "string"
					},
					"ID" : {
						"description": "The unique identifier for a user",
						"type" : "integer"
					},
					"Email" : {
						"description": "The email of the user",
						"type" : "string"
					}
				},
				"required": ["ID", "Name"]
			};

			let data = [ { "Name": "Bob", "ID": 123, "Email": "bob@augmentedjs.org" },
			{ "Name": "Jonathan", "ID": 234, "Email": "jonathon@augmentedjs.org" },
			{ "Name": "Corey", "ID": 345, "Email": "corey@augmentedjs.org" },
			{ "Name": "Seema", "ID": 456, "Email": "seema@augmentedjs.org" },
			{ "Name": "Jasmine", "ID": 567, "Email": "jasmine@augmentedjs.org" }
		];

		let at;

		beforeEach(() => {
			at = new Table.AutomaticTable({schema: schema});
		});

		afterEach(() => {
			at.remove();
			at = null;
		});

		it('can create an instance', () => {
			expect(at instanceof Table.AutomaticTable).to.be.true;
		});

		it('is initialized with a schema', () => {
			expect(at).to.not.be.undefined;
			expect(at.isInitalized).to.be.true;
		});

		it('can set uri and schema', () => {
			at.setURI(uri);
			expect(at.uri).to.equal(uri);
			expect(at.schema).to.equal(schema);
		});

		it('can populate data', () => {
			at.populate(data);
			expect(at.data).to.equal(data);
		});

		it('won\'t populate a string', () => {
			at.populate("data");
			expect(at.data).to.deep.equal([]);
		});

		it('won\'t populate a number', () => {
			at.populate(123);
			expect(at.data).to.deep.equal([]);
		});

		it('won\'t populate an object', () => {
			at.populate({ 123: 123 });
			expect(at.data).to.deep.equal([]);
		});

		xit('can compile data to a template (DEPRECATED)', () => {
			at.populate(data);
			let html = at.compileTemplate();
			expect(html).not.to.equal("");
		});

		it('can render the table', () => {
			at.populate(data);
			let t = at.render();
			expect(t).to.not.be.undefined;
		});

		it('can export the table to csv', () => {
			at.populate(data);
			let t = at.exportTo('csv');
			expect(t).to.not.be.undefined;
			expect(t).not.to.equal("");
		});

		it('can export the table to tsv', () => {
			at.populate(data);
			let t = at.exportTo('tsv');
			expect(t).to.not.be.undefined;
			expect(t).not.to.equal("");
		});

		it('can export the table to html', () => {
			at.populate(data);
			let t = at.exportTo('html');
			expect(t).to.not.be.undefined;
			expect(t).not.to.equal("");
		});

		it('can validate', () => {
			at.populate(data);
			let m = at.validate();
			expect(m).to.not.be.undefined;
			expect(at.isValid()).to.be.true;
		});
	});
/*
	describe("Can create subclasses", () => {
		it('can create a BigDataTable class', () => {
			let b = new Augmented.Presentation.BigDataTable();
			expect(Augmented.Presentation.BigDataTable).to.not.be.undefined;
			expect(b instanceof Augmented.Presentation.BigDataTable).to.be.true;
			expect(b.paginationAPI).to.not.be.undefined;
			b.remove();
			b = null;
		});

		it('can create a EditableTable class', () => {
			let b = new Augmented.Presentation.EditableTable();
			expect(Augmented.Presentation.EditableTable).to.not.be.undefined;
			expect(b instanceof Augmented.Presentation.EditableTable).to.be.true;
			expect(b.editable).to.be.true;
			b.remove();
			b = null;
		});

		it('can create a EditableBigDataTable class', () => {
			let b = new Augmented.Presentation.EditableBigDataTable();
			expect(Augmented.Presentation.EditableBigDataTable).to.not.be.undefined;
			expect(b instanceof Augmented.Presentation.EditableBigDataTable).to.be.true;
			expect(b.editable).to.be.true;
			expect(b.paginationAPI).to.not.be.undefined;
			b.remove();
			b = null;
		});

		it('can create a LocalStorageTable class', () => {
			let b = new Augmented.Presentation.LocalStorageTable();
			expect(Augmented.Presentation.LocalStorageTable).to.not.be.undefined;
			expect(b instanceof Augmented.Presentation.LocalStorageTable).to.be.true;
			expect(b.localStorage).to.be.true;
			expect(b.localStorageKey).to.not.be.undefined;
			expect(b.uri).to.equal(null);
			b.remove();
			b = null;
		});

		it('can create a EditableLocalStorageTable class', () => {
			let b = new Augmented.Presentation.EditableLocalStorageTable();
			expect(Augmented.Presentation.EditableLocalStorageTable).to.not.be.undefined;
			expect(b instanceof Augmented.Presentation.EditableLocalStorageTable).to.be.true;
			expect(b.localStorage).to.be.true;
			expect(b.localStorageKey).to.not.be.undefined;
			expect(b.editable).to.be.true;
			expect(b.uri).to.equal(null);
			b.remove();
			b = null;
		});
	});
	*/
});
